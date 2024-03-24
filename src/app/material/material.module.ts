import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports : [
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class MaterialModule { }
