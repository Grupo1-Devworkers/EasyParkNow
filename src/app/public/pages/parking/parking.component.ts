import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseService} from "../../../share/services/base.service";
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

    constructor(private modalSS:BaseService) {
    }
  ngOnInit(){

  this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch=valor})
  }

  openModal() {
    this.modalSwitch = true;
  }

}
