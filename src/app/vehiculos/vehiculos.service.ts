import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

const API_URL='http://127.0.0.1:8000/api/vehicle/list/'

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http:HttpClient) { }

  obtenerVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(API_URL);
  }

  crearVehiculo(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>('http://127.0.0.1:8000/api/vehicle/crear-vehiculo', vehiculo)
  }
}
