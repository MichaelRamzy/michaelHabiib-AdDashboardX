import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    dashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
