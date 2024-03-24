import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { SprintComponent } from './sprint/sprint.component';
@NgModule({
  declarations: [DashboardComponent, SprintComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    dashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class DashboardModule {}
