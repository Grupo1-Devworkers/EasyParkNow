import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  perfil: string = 'assets/anime.jpg';
  mapa: string = 'assets/mapa.png';
  opciones: string = 'assets/opciones.png';
  topparking: string = 'assets/badge.png';
  history: string = 'assets/historial.png'

  constructor(private router: Router) {}
  clickMap() {
    this.router.navigate(['./map']);
  }
  clickOption() {
    this.router.navigate(['./option']);
  }
  onClick() {
    this.router.navigate(['./parking-screen']);
  }
  clickTopParking() {
    this.router.navigate(['./topparkings']);
  }
  clickHistory() {
    this.router.navigate(['./history']);
  }
}
