import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  currentUser: User;

  constructor(private authenticationService: AuthService, private http: HttpClient
) {
  this.authenticationService.user.subscribe(user => this.currentUser = user);
 }

 ngOnInit() {
   this.getUsers().subscribe(result => {
     console.log(result);
   })
 }

 getUsers() {
  return this.http.get<any>(`${environment.apiUrl}api/users`);
 }

}
