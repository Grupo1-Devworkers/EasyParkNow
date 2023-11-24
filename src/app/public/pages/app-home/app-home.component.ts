import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  constructor(private router: Router) {}

  redirectToPage() {
    this.router.navigate(['sign-in']); // Reemplaza '/ruta-de-tu-pagina' con la ruta a donde quieras redirigir
  }

}
