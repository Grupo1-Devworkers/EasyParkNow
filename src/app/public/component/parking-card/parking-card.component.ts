import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parking-card',
  templateUrl: './parking-card.component.html',
  styleUrls: ['./parking-card.component.css']
})
export class ParkingCardComponent {
  @Input() parking: any;
}
