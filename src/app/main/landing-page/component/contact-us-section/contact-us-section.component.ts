import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { helperActions } from 'app/core/states/helpers/helper.action';
import { ContactUsSection, SectionsList, map } from 'app/model/landing';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss']
})

export class ContactUsSectionComponent implements OnInit {
  contactUsTypeId = contactUsTypeId;

  @Input() contactUs: SectionsList | undefined;

  constructor(private _store: Store) {
    // let that = this;
    // debugger;
    // var loadMapFired = new CustomEvent("loadMap", {
    //   "detail": this.contactUs?.mapCards
    // });

    // window.dispatchEvent(loadMapFired);

  }

  ngOnInit(): void {
    this._store.dispatch(helperActions.contactUsSectionMapCards({ mapCards: this.contactUs?.mapCards as map[] }))
  }

}


enum contactUsTypeId {
  TimesOfWork = 1,
  Location = 2,
  Phone = 3,
  Email = 4,
  Link = 5,
}
