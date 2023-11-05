import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {BaseService} from "../../../share/services/base.service";
import {Router} from "@angular/router";
export interface Time{
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit{
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
