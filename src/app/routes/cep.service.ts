import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  // HttpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  // Authorization: 'Bearer ' + localStorage.getItem('token'),
  // 'SecurityKey': environment.secret_key
  // });

  url = `https://viacep.com.br/ws/`;

  getCep(cep: String) {
    return this.http.get(`${this.url}/${cep}/json/`);
  }
}
