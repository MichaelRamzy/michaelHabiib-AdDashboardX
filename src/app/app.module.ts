import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
const environment : any = {
  production : false,
  firebaseConfig : {
    apiKey: "AIzaSyB5-S577JQ5k1VZ3Udh_2kMXfJSRxeOF74",
    authDomain: "addashboardx.firebaseapp.com",
    projectId: "addashboardx",
    storageBucket: "addashboardx.appspot.com",
    messagingSenderId: "314091997496",
    appId: "1:314091997496:web:38290392ca2bbb218259cd",
    measurementId: "G-Q6QDP5YF7C"
    }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    DashboardModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
