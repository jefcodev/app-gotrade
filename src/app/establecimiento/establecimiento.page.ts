import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Establecimiento } from '../models/establecimiento.model';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.page.html',
  styleUrls: ['./establecimiento.page.scss'],
})
export class EstablecimientoPage  implements OnInit{
  nombre!: string;
  direccion_manzana!: string;
  direccion_calle_principal!: string;
  direccion_numero!: string;
  direccion_transversal!: string;
  direccion_referencia!: string;
  administrador!: string;
  telefonos_contacto!: string;
  email_contacto!: string;
  ubicacion!: string;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  crearEstablecimiento(){

    const datos : Establecimiento = {
      nombre: this.nombre,
  direccion_manzana: this.direccion_manzana,
  direccion_calle_principal: this.direccion_calle_principal,
  direccion_numero: this.direccion_numero,
  direccion_transversal: this.direccion_transversal,
  direccion_referencia: this.direccion_referencia,
  administrador: this.administrador,
  telefonos_contacto: this.telefonos_contacto,
  email_contacto: this.email_contacto,
  ubicacion: this.ubicacion,
  id_provincia: "b4e2f21c-7df4-4b4a-a110-f8beeed5794e",
  id_ciudad: "b1fd5659-18c9-498e-9935-2e33b24205ff",
  id_zona: "98b07509-3eea-4e74-8e74-f3f36649244f",
  id_canal: "4fce0b22-4990-4a20-ba91-adfe9af39215",
  id_subcanal: "94e3df1e-38cc-4727-9d3e-a375b4711a4a",
  id_cadena: "7a086f5d-e039-4c1e-b391-b8aae45b547d",
  en_ruta: "1",
  cliente_proyecto_id: "568cf8ce-a2d6-411b-85bf-d9678c2a8c4b"
    }
    this.authService.createEstablecimiento(datos).subscribe(
      (reso)=>{
        console.log('Creado Correctamente')
      },
      (error)=>{
        console.log('Error al crear el Establecimiento')
      }

    )
}
}
