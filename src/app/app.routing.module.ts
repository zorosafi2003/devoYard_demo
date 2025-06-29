import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SurveyPage } from "./pages/survey.page";
import { CreatorPage } from "./pages/creator.page";


const routes: Routes = [
  { path: "", component: SurveyPage },
  { path: "creator", component: CreatorPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
