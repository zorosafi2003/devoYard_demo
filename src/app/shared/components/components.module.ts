import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
 
  ],
  exports:[
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),

  ]
})
export class ComponentsModule { }
