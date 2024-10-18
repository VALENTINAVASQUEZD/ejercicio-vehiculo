import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-vehiculos-create',
  standalone: true,
  imports: [],
  templateUrl: './vehiculos-create.component.html',
  styleUrl: './vehiculos-create.component.css'
})
export class VehiculosCreateComponent implements OnInit {
  vehiculoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private vehiculosService:VehiculosService) {}
  
  ngOnInit(): void {

    this.vehiculoForm = this.formBuilder.group({
      placa: ['', [Validators.required, Validators.minLength(6)]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      color: ['', [Validators.required, Validators.minLength(1)]],
      modelo: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  crearVehiculo(vehiculo: Vehiculo): void {
    this.vehiculosService.crearVehiculo(vehiculo).subscribe(
      (vehiculoCreado) =>{
        alert('vehiculo creado con exito')
        this.vehiculoForm.reset();
      },
    );
  }

}
