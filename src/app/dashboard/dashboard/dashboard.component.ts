import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
Object: any;
data: any;
constructor(private AuthService : AuthService){
  this.data = this.AuthService.data
}
getKeys() {
  return Object.keys(this.data);
}

}
