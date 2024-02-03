import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth.model';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Establecimiento } from '../models/establecimiento.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private apiUrl = 'https://api.systemcode.ec/api/v1';

  constructor(private http: HttpClient,
    private router: Router) { }

    get headers() {
      return {
        headers: new HttpHeaders({
          'x-token': localStorage.getItem('token') || '' 
        })
      };
    }

  guardarLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  login(auth: Auth) {
    const url = `http://test.gosice.com/api/v1/login`;
    return this.http.post(url, auth)/* .pipe(
      tap((resp: any) => {
        this.guardarLocalStorage(resp.token);
      }),
      catchError(error => {
        console.log('Error en el servicio de autenticación:', error);
        return throwError(error);
      })
    ) */;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  createEstablecimiento(establecimiento: Establecimiento) {
    const url = `${this.apiUrl}/establecimientos/agregar-establecimiento`;
    return this.http.post(url, establecimiento, this.headers);
  }


}