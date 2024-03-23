import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogedIn!: BehaviorSubject<boolean>;
  isLogedIn$!: Observable<boolean>;
  constructor(public afAuth: AngularFireAuth) {
    if (localStorage.getItem('userToken')) {
      this.isLogedIn = new BehaviorSubject<boolean>(true);
      this.isLogedIn$ = this.isLogedIn.asObservable();
    } else {
      this.isLogedIn = new BehaviorSubject<boolean>(false);
      this.isLogedIn$ = this.isLogedIn.asObservable();
    }
  }
  toggleLogedState() {
    this.isLogedIn.next(!this.isLogedIn.value);
  }
  async signInWithPhoneNumber(phoneNumber: string): Promise<any> {
    const auth = getAuth();
    const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      return confirmationResult;
    } catch (error) {
      console.error('Error sending SMS', error);
      throw error;
    }
  }

  async verifyPhoneNumber(
    confirmationResult: any,
    verificationCode: string
  ): Promise<any> {
    try {
      const credential = await confirmationResult.confirm(verificationCode);
      return credential;
    } catch (error) {
      console.error('Error verifying code', error);
      throw error;
    }
  }

  async signOut(): Promise<any> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Error signing out', error);
      throw error;
    }
  }
}
