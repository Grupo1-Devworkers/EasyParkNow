import { Component } from '@angular/core';
import {BaseService} from "../../../share/services/base.service";

@Component({
  selector: 'app-modal-reservation',
  templateUrl: './modal-reservation.component.html',
  styleUrls: ['./modal-reservation.component.css']
})
export class ModalReservationComponent {
  constructor(private modalSS:BaseService ) {
  }
  ngOnInit() {

  }

  closeModal (){
    this.modalSS.$modal.emit(false)

  }
}
