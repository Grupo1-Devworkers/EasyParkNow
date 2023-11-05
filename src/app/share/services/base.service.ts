import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  localLink = 'http://localhost:3000/api/v1/parkings';

  basePath = this.localLink;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.basePath, this.httpOptions);
  }
}
