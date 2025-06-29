import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { SurveyModule } from "survey-angular-ui";
import { SurveyCreatorModule } from "survey-creator-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AngularSvgIconModule } from "angular-svg-icon";
import { environment } from "environments/environment";
import { helperReducer } from "./core/states/helpers/helper.reducer";
import { LandingPageModule } from "./main/landing-page/landing-page.module";
import { PagesModule } from "./main/pages/pages.module";
import { ComponentsModule } from "./shared/components/components.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastModule } from 'primeng/toast';
import { HttpRequestInterceptor } from "./common/HttpRequestInterceptor/http-request-interceptor.interceptor";
import { MessageModule } from 'primeng/message';
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SurveyModule, SurveyCreatorModule ,
    // Importing the ComponentsModule to include shared components
      ComponentsModule, HttpClientModule, AngularSvgIconModule.forRoot(), MessageModule,
    NgbModule, LandingPageModule, PagesModule, BrowserAnimationsModule, ToastModule,
    StoreModule.forRoot({
      helpers: helperReducer
    }), 
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }) 
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
