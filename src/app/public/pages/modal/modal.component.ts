import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Injectable } from '@angular/core';
import {BaseService} from "../../../share/services/base.service";


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  modalSwitch: boolean | undefined;
  constructor(private modalSS:BaseService ) {
  }
  ngOnInit() {
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch=valor})
  }

  closeModal (){
    this.modalSS.$modal.emit(false)

  }


  openModal() {
    this.modalSwitch = true;
  }

}
