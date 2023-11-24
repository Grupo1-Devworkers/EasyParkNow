// parking.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  agregarEstacionamiento(estacionamiento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/parking`, estacionamiento);
  }
}
