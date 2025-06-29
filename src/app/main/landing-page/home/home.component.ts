import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'app/model/Theme';
import { landingPage } from 'app/model/landing';
import { RestApiService } from 'app/service/rest-api.service';
import { Title } from "@angular/platform-browser";
import { LandingPageTemplateService } from 'app/service/landing-page-template.service';
import { Store } from '@ngrx/store';
import { helperActions } from 'app/core/states/helpers/helper.action';
import { AppState } from 'app/core/states/app.state';
import { helperSelectors } from 'app/core/states/helpers/helper.selector';

declare function loadMap(e: any): any;


@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   landingPageData: landingPage | undefined;
   ThemeData: Theme | undefined;

   constructor(
      public restApi: RestApiService, private route: ActivatedRoute,
      private titleService: Title, private _landingPageTemplateService: LandingPageTemplateService,
      private _store: Store<AppState>) {
      let landingName = this.route.snapshot.paramMap.get('landingName')
      if (landingName != null) {
         this.GetTheme(landingName);
         if (this.landingPageData?.name) {
            this.titleService.setTitle(this.landingPageData?.name);
         }


      }
      else {
         debugger;
         let LandingPageId = localStorage.getItem('LandingPageMandatory');
         this.GetLandingPageById(LandingPageId);
         this.titleService.setTitle("Some title");
         if (this.landingPageData?.name) {
            this.titleService.setTitle(this.landingPageData?.name);
         }

      }
   }

   ngOnInit() {
      this._store.select(helperSelectors.contactUsSectionMapCards).subscribe(result => {
         setTimeout(() => {
            loadMap(this.landingPageData?.contactUsSection.mapCards);
         }, 1000);
      })

      // let that = this;
      // window.addEventListener("loadMap", function (e) {

      //    debugger;
      //    setTimeout(() => {
      //       loadMap(that.landingPageData?.contactUsSection.mapCards);
      //    }, 1000);
      // });

   }

   GetTheme(landingName: any) {
      this._landingPageTemplateService.getTheme({ landingName, survyKey: '',lang:null }).subscribe(data => {
         this.ThemeData = data;
         document.documentElement.style.setProperty('--primaryColor', this.ThemeData.appearanceStyle.primaryColor);
         this.GetLandingPageById(this.ThemeData.landingId)
      });
   }

   GetLandingPageById(landingId: any) {
      debugger;
      this._landingPageTemplateService.getLandingPageById(landingId).subscribe(data => {
         debugger;
         let menu: MenuItem[] = [];
         this.landingPageData = data;
         debugger;
         this.landingPageData.sectionsList.forEach((currentValue, index) => {
            if (currentValue.addToNavbar) {
               menu.push({ name: currentValue.title, navigationId: currentValue.sectionId.toString() })
            }


         });
         localStorage.setItem('isHeaderActive', 'true');
         localStorage.setItem('HeaderItem', JSON.stringify(menu));
         this._store.dispatch(helperActions.buildHeader());
         // window.dispatchEvent(new Event('buildHeader'));
      });
   }




}

export interface MenuItem {
   name: string
   navigationId: string
}