// add-parking.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css']
})
export class AddParkingComponent implements OnInit {
  parkingForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.parkingForm = this.fb.group({
      imageUrl: ['', Validators.required],
      nombre: ['', Validators.required],
      tarifa: ['', Validators.required],
      estrellas: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  agregarEstacionamiento() {
    // Obtén los datos del formulario
    const nuevoEstacionamiento = this.parkingForm.value;

    // Realiza la solicitud HTTP para agregar el estacionamiento
    this.http.post('http://localhost:3000/parking', nuevoEstacionamiento)
      .subscribe(
        (response) => {
          console.log('Estacionamiento agregado exitosamente:', response);
          // Puedes realizar acciones adicionales aquí, como mostrar un mensaje de éxito o navegar a otra página
        },
        (error) => {
          console.error('Error al agregar estacionamiento:', error);
          // Puedes manejar el error aquí, como mostrar un mensaje de error al usuario
        }
      );
  }
}
