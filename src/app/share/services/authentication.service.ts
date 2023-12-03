import { Injectable } from '@angular/core';
import {UserEntity} from "../../public/model/user.entity";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //basePath: string = ' http://localhost:3000';
  basePath : string='http://localhost:3000/api/v1';
  currentUser!: UserEntity;

  constructor(private http: HttpClient) {}
  handleError(error : HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      //Deafult error handling
      console.log(`An error ocurred: ${error.error.message}`);
    }else {
      //Unsuccessfull Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was:${error.error}`);
    }
    //Return ThrowError Observable with Error Message to Client
    return throwError(
      ()=> new Error('Something happened with request, please try again later')
    );

  }
  //Sign UP
  signUp(users : UserEntity): Observable<any>{
    return this.http.post(`${this.basePath}/sign-up` , users)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Sign IN
  signIn(users :UserEntity){
    return this.http.post(`${this.basePath}/sign-in`, users)
      .pipe(retry(2), catchError(this.handleError));
  }
}
