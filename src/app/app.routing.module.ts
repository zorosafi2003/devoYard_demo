import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 's',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 's',
    loadChildren: () =>
      import('./main/survey/survey-wizard.module').then((m) => m.SurveyWizardModule),
  },
  {
    path: 'l',
    loadChildren: () =>
      import('./main/landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'pl',
    loadChildren: () =>
      import('./main/landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./main/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'pages/NotFound',
    loadChildren: () =>
      import('./main/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    redirectTo: '/pages/error', //Error 404 - Page not found
  },
  // { path: "", component: SurveyPage },
  // { path: "creator", component: CreatorPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
