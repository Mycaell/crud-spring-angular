import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    SharedModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
