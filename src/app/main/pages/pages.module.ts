import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ErrorComponent } from './error/error.component';

const routes = [
  {
    path: '',
    component: NotFoundComponent,
    data: { animation: 'home' },
  },
  {
    path: 'pages/NotFound',
    component: NotFoundComponent,
    data: { animation: 'home' },
  },
  {
    path: 'pages/error',
    component: ErrorComponent,
    data: { animation: 'home' },
  }
];


@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    AngularSvgIconModule.forRoot(),
  ]
})
export class PagesModule { }
