import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Auth } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string ="";
    password: string ="";
  constructor( private authService: AuthService,
                private http: HttpClient) { }

  ngOnInit() {
  }
  login(){

    const datos: Auth = {
      email: this.email,
      password: this.password,
      getToken: true
    }

    this.authService.login(datos).subscribe(
      (resp)=>{
        console.log('Datos'+ JSON.stringify(resp));
      },
      (error)=>{
        console.log('Detalles del error:', JSON.stringify(error));

      }
    )
    
    console.log('Hola' + this.email)
  }

  testConnection() {
    const url = 'https://test.gosice.com/api/v1/';
    this.http.get(url).subscribe(
      response => {
        console.log('Éxito:', response);
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

}
