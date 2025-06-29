import { RouterModule, Routes } from "@angular/router";
import { SurveyWizardComponent } from "./survey-wizard/survey-wizard.component";

const routes: Routes = [
    {
        path: ':survey',
        component: SurveyWizardComponent,
        data: { animation: 'home' },
    },
    {
        path: 'e/:shortCode',
        component: SurveyWizardComponent,
        data: { animation: 'home' },
    },
    {
        path: ':survey/a/:applicant',
        component: SurveyWizardComponent,
        data: { animation: 'home' }
    }
]

export const SurveyWizardRoutingModule = RouterModule.forChild(routes);