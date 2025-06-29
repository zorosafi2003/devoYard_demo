import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/states/app.state';
import { helperSelectors } from 'app/core/states/helpers/helper.selector';
import { RestApiService } from 'app/service/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  HeaderItem: any;
  isHeaderActive: string = 'true';
  landingName: any;
  hideLandingPageMenu : any;

  constructor(  public restApi: RestApiService, private _store:Store<AppState> ) { 
  }
  scroll(elem: string, offset: number) {
    const yOffset = offset;
    const element = document.querySelector(elem)!;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y - 100, behavior: 'smooth' });
  }

  onReloadSurvey(){
   window.location.reload();
  }
  
  ngOnInit() {
    let that = this;
      window.addEventListener("NoHeadeMenu", function () {
        that.hideLandingPageMenu = true;
     });
    
    this._store.select(helperSelectors.buildHeader).subscribe(()=>{
      let HeaderItem = localStorage.getItem('HeaderItem');
      let HeaderActive = localStorage.getItem('isHeaderActive')
      let landingName =  localStorage.getItem('landingName');

      if (HeaderItem != null) {
        this.HeaderItem = JSON.parse(HeaderItem) as any;
      }
      if (HeaderActive != null) {
        this.isHeaderActive = HeaderActive;
      }
      if (landingName) {
        this.landingName = landingName;
      }
    });
    
    // let that = this;

    // window.addEventListener("buildHeader", function () {
    //   let HeaderItem = localStorage.getItem('HeaderItem');
    //   let HeaderActive = localStorage.getItem('isHeaderActive')
    //   let landingName =  localStorage.getItem('landingName');

    //   if (HeaderItem != null) {
    //     that.HeaderItem = JSON.parse(HeaderItem) as any;
    //   }
    //   if (HeaderActive != null) {
    //     that.isHeaderActive = HeaderActive;
    //   }
    //   if (landingName) {
    //     that.landingName = landingName;
    //   }
  
    // });
  }




}
