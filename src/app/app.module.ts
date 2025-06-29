import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { SurveyComponent } from "./components/survey.component";
import { SurveyPage } from "./pages/survey.page";
import { SurveyCreatorComponent } from "./components/survey.creator.component";
import { CreatorPage } from "./pages/creator.page";
import { SurveyModule } from "survey-angular-ui";
import { SurveyCreatorModule } from "survey-creator-angular";

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyPage,
    SurveyCreatorComponent,
    CreatorPage,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SurveyModule, SurveyCreatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
