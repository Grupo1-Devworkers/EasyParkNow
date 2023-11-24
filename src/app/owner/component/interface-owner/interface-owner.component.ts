import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-interface-owner',
  templateUrl: './interface-owner.component.html',
  styleUrls: ['./interface-owner.component.css']
})
export class InterfaceOwnerComponent {
  constructor(private router: Router) {}

  navigateToAddParking() {
    this.router.navigate(['/add-parking']);
  }
  perfil: string = 'assets/anime.jpg';
  navigateToParkingList() {
    this.router.navigate(['/parking-list']);
  }
}
