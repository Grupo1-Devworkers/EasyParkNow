import { Component, Input } from '@angular/core';
import {Time} from "@angular/common";
import {BaseService} from "../../../share/services/base.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parking-card',
  templateUrl: './parking-card.component.html',
  styleUrls: ['./parking-card.component.css']
})
export class ParkingCardComponent {
  @Input() parking: any;

  perfil: string = 'assets/anime.jpg';
  estacionamiento: string = 'assets/estacionamiento.jpeg';
  star_black: string = 'assets/star black.png';
  star: string = 'assets/star.png';

  times: Time[] = [
    {value: 1, viewValue: '1 hora'},
    {value: 2, viewValue: '2 horas'},
    {value: 3, viewValue: '3 horas'},
    {value: 4, viewValue: '4 horas'}
  ]

  modalSwitch: boolean | undefined;

  constructor(private modalSS:BaseService, private router: Router) {
  }
  ngOnInit(){

    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch=valor})
  }

  openModal() {
    this.modalSwitch = true;
  }

  clickMap() {
    this.router.navigate(['./map']);
  }
  clickHome() {
    this.router.navigate(['./home']);
  }
  onClick() {
    this.router.navigate(['./parking']);
  }
}
