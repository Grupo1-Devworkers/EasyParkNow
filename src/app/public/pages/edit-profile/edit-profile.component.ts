import { Component } from '@angular/core';
import {AuthenticationService} from "../../../share/services/authentication.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  direccion: string = '';
  contrasena: string = '';

  constructor(
    private authenticationService: AuthenticationService  // Inyecta el servicio de autenticación
  ) { }



  guardarCambios() {
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Correo:', this.correo);
    console.log('Dirección:', this.direccion);
    console.log('Contraseña:', this.contrasena);

  }
}
