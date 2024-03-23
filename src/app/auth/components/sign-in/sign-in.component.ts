import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  phoneNumber: string = '';
  // verificationCode: string = '';
  confirmationResult: any;
  isVerificationCodeNotSent: boolean = true;
  phonenumberForm!: FormGroup;
  verificationCode!: FormGroup;
  constructor(
    private AuthService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.phonenumberForm = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
    });
    this.verificationCode = this.fb.group({
      verificationCode: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  sendVerificationCode() {
    const phonenumberr = this.phonenumberForm.get('phoneNumber')?.value;
    console.log(phonenumberr);

    this.AuthService.signInWithPhoneNumber(phonenumberr)
      .then((confirmationResult: any) => {
        console.log(confirmationResult);

        this.isVerificationCodeNotSent = false;
        this.confirmationResult = confirmationResult;
        this.openSnackBar('Verfiction Code Sent');
      })
      .catch((error) => {
        this.openSnackBar('Failed to Send Veriction Code');
      });
  }
  verifyCode() {
    const verificationCodee = this.verificationCode.get('verificationCode')?.value;
    console.log(verificationCodee);

    this.AuthService.verifyPhoneNumber(
      this.confirmationResult,
      verificationCodee
    )
      .then((credential) => {
        this.AuthService.toggleLogedState();
        console.log(credential);

        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.openSnackBar('Something Went Wrong');
      });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Splash', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 4000,
    });
  }
}
