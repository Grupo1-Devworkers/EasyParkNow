import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  google: string = 'assets/google.jpg';
  onClick() {
    alert('¡Hiciste clic en el botón!');
  }
}
