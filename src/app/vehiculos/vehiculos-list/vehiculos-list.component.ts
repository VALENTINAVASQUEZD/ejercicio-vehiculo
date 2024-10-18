import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './vehiculos-list.component.html',
  styleUrl: './vehiculos-list.component.css'
})
export class VehiculosListComponent implements OnInit {

  vehiculos: Array<Vehiculo>=[];
  constructor(private routerPath: Router,private vehiculosService:VehiculosService) {

  }

  ngOnInit() {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(){
    this.vehiculosService.obtenerVehiculos().subscribe(vs =>{
      this.vehiculos=vs
      console.log(this.vehiculos)
    });
  }

  onEditarNavigate(id: number) {
   // this.routerPath.navigate([‵/vehiculos/editar/${id}‵])
  }

}
