export class Vehiculo {
    placa: String;
    modelo: String;
    color_vehiculo: String;
    marca: String;
    id: number;
    color_vehiculo_nombre: String;

    public constructor(placa: String, modelo: String, color_vehiculo: String, marca: String, id: number, color_vehiculo_nombre: String) {
        this.placa = placa;
        this.modelo = modelo;
        this.color_vehiculo = color_vehiculo;
        this.marca = marca;
        this.id = id;
        this.color_vehiculo_nombre = color_vehiculo_nombre;
    }
}