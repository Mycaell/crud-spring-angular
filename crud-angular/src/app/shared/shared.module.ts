import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoriaPipe } from './pipes/categoria.pipe';

const angularModules: any = [
  CommonModule,
  RouterModule
];
const materialModules: any= [
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe
  ],
  imports: [
    CommonModule,
    angularModules,
    materialModules
  ],
  exports: [
    angularModules,
    materialModules,
    ErrorDialogComponent,
    CategoriaPipe
  ]
})
export class SharedModule { }
