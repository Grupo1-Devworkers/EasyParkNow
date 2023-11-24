// parking-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
  parkings: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Realiza la solicitud HTTP para obtener los estacionamientos desde json-server
    this.http.get<any[]>('http://localhost:3000/parking')
      .subscribe(data => {
        this.parkings = data;
      });
  }
}
