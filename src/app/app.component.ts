import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EasyParkNow';
  constructor(private router: Router) {
  }
  signOut(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['home']).then();
    console.log('Signed Out');
  }
  getCurrentUser(){
    let currentUserString = localStorage.getItem('currentUser');
    if(currentUserString) {
      console.log(`current user: ${currentUserString}`);
      let currentUser: string = (JSON.parse(currentUserString));
      console.log(currentUser);
      return currentUser;
    }
    else
      return null;
  }

  getCurrentTokenUser (){
    let tokenString = localStorage.getItem('accessToken');
    if(tokenString) {
      console.log(`current user: ${tokenString}`);
      let tokenUser: string = (JSON.parse(tokenString));
      console.log(tokenUser);
      return tokenUser;
    }
    else
      return null;
  }
}
