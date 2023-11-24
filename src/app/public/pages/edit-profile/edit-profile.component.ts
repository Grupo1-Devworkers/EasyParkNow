import { Component } from '@angular/core';

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

  guardarCambios() {
    // Aquí puedes manejar la lógica para guardar los cambios del perfil
    // Por ejemplo, podrías enviar estos datos a un servicio o API para actualizar el perfil del usuario.
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Correo:', this.correo);
    console.log('Dirección:', this.direccion);
    console.log('Contraseña:', this.contrasena);
    // Lógica adicional para guardar los cambios...
  }
}
