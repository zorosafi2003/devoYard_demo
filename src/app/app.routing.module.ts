import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SurveyWizardComponent } from "./main/survey/survey-wizard/survey-wizard.component";


const routes: Routes = [
  {
    path: '',
   component: SurveyWizardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
