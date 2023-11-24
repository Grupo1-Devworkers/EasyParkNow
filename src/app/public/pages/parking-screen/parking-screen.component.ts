
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-parking-screen',
  templateUrl: './parking-screen.component.html',
  styleUrls: ['./parking-screen.component.css']
})
export class ParkingScreenComponent implements OnInit {
  parking: any;
  perfil: string = 'assets/anime.jpg';
  currentParkingId: number = 1;

  constructor(private http: HttpClient, private router: Router) { }
  clickMap() {
    this.router.navigate(['./map']);
  }
  clickHome() {
    this.router.navigate(['./home']);
  }
  onClick() {
    this.router.navigate(['./parking']);
  }
  ngOnInit(): void {
    this.loadParking();
  }

  loadParking() {
    this.http.get<any>(`http://localhost:3000/parking/${this.currentParkingId}`)
      .subscribe(data => {
        this.parking = data;
      });
  }

  nextParking() {
    this.currentParkingId++;
    this.loadParking();
  }
}
