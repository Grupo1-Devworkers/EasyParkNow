import {Component, Input, OnInit} from '@angular/core';
import {BaseService} from "../../../share/services/base.service";
import {Router} from "@angular/router";
export interface Time{
  value: number;
  viewValue:string;
}
@Component({
  selector: 'app-parking-card',
  templateUrl: './parking-card.component.html',
  styleUrls: ['./parking-card.component.css']
})
export class ParkingCardComponent implements OnInit {
  @Input() parking: any;

  estacionamiento: string = 'assets/estacionamiento.jpeg';


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
