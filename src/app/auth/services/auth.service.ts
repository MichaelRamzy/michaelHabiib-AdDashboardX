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
  data = {
    "sprint_1": [
      {
        "id": 1,
        "title": "Ad Campaign 1",
        "status": "Active",
        "priority": "High",
        "type": "Banner",
        "estimated_time": "2 hours",
        "task_description": "Design and implement a banner ad for product X promotion.",
        "created_at": "2024-03-23T08:00:00Z",
        "updated_at": "2024-03-23T10:00:00Z",
        "assigned_to": "John Doe",
        "created_by": "Alice Smith",
        "comments": [
          {
            "author": "John Doe",
            "comment": "Initial design draft uploaded."
          },
          {
            "author": "Alice Smith",
            "comment": "Looks good, proceed with finalizing it."
          }
        ]
      },
      {
        "id": 11,
        "title": "Ad Campaign 2",
        "status": "Active",
        "priority": "High",
        "type": "Banner",
        "estimated_time": "2 hours",
        "task_description": "Design and implement a banner ad for product X promotion.",
        "created_at": "2024-03-23T08:00:00Z",
        "updated_at": "2024-03-23T10:00:00Z",
        "assigned_to": "John Doe",
        "created_by": "Alice Smith",
        "comments": [
          {
            "author": "John Doe",
            "comment": "Initial design draft uploaded."
          },
          {
            "author": "Alice Smith",
            "comment": "Looks good, proceed with finalizing it."
          }
        ]
      }
    ],
    "sprint_2": [
      {
        "id": 2,
        "title": "Ad Campaign 2",
        "status": "Pending",
        "priority": "Medium",
        "type": "Video",
        "estimated_time": "4 hours",
        "task_description": "Create a video ad showcasing new product features.",
        "created_at": "2024-03-21T10:00:00Z",
        "updated_at": "2024-03-22T09:00:00Z",
        "assigned_to": "Emily Johnson",
        "created_by": "Bob Brown",
        "comments": [
          {
            "author": "Emily Johnson",
            "comment": "Script finalized, moving to production phase."
          },
          {
            "author": "Bob Brown",
            "comment": "Great progress, keep it up!"
          }
        ]
      },
      {
        "id": 22,
        "title": "Ad Campaign 2",
        "status": "Pending",
        "priority": "Medium",
        "type": "Video",
        "estimated_time": "4 hours",
        "task_description": "Create a video ad showcasing new product features.",
        "created_at": "2024-03-21T10:00:00Z",
        "updated_at": "2024-03-22T09:00:00Z",
        "assigned_to": "Emily Johnson",
        "created_by": "Bob Brown",
        "comments": [
          {
            "author": "Emily Johnson",
            "comment": "Script finalized, moving to production phase."
          },
          {
            "author": "Bob Brown",
            "comment": "Great progress, keep it up!"
          }
        ]
      },
      {
        "id": 222,
        "title": "Ad Campaign 2",
        "status": "Pending",
        "priority": "Medium",
        "type": "Video",
        "estimated_time": "4 hours",
        "task_description": "Create a video ad showcasing new product features.",
        "created_at": "2024-03-21T10:00:00Z",
        "updated_at": "2024-03-22T09:00:00Z",
        "assigned_to": "Emily Johnson",
        "created_by": "Bob Brown",
        "comments": [
          {
            "author": "Emily Johnson",
            "comment": "Script finalized, moving to production phase."
          },
          {
            "author": "Bob Brown",
            "comment": "Great progress, keep it up!"
          }
        ]
      }
    ],
    "sprint_3": [
      {
        "id": 3,
        "title": "Ad Campaign 3",
        "status": "Completed",
        "priority": "Low",
        "type": "Interactive",
        "estimated_time": "6 hours",
        "task_description": "Develop an interactive ad for upcoming event registration.",
        "created_at": "2024-03-20T14:00:00Z",
        "updated_at": "2024-03-22T16:00:00Z",
        "assigned_to": "Mark Wilson",
        "created_by": "Eva Garcia",
        "comments": [
          {
            "author": "Mark Wilson",
            "comment": "Final testing completed, ready for deployment."
          },
          {
            "author": "Eva Garcia",
            "comment": "Fantastic job, thank you!"
          }
        ]
      },
      {
        "id": 33,
        "title": "Ad Campaign 3",
        "status": "Completed",
        "priority": "Low",
        "type": "Interactive",
        "estimated_time": "6 hours",
        "task_description": "Develop an interactive ad for upcoming event registration.",
        "created_at": "2024-03-20T14:00:00Z",
        "updated_at": "2024-03-22T16:00:00Z",
        "assigned_to": "Mark Wilson",
        "created_by": "Eva Garcia",
        "comments": [
          {
            "author": "Mark Wilson",
            "comment": "Final testing completed, ready for deployment."
          },
          {
            "author": "Eva Garcia",
            "comment": "Fantastic job, thank you!"
          }
        ]
      }
    ]
  }
  
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
