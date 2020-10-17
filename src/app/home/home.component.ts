import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser: User;

  constructor(private authenticationService: AuthService
) {
  this.authenticationService.user.subscribe(user => this.currentUser = user);
 }

}
