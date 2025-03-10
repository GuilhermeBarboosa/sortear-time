import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasCnhResponse, EstadosResponse } from '../interfaces/dto/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cnhUrl = 'assets/categorias_cnh.json';
  private estadosUrl = 'assets/estados.json';

  constructor(private http: HttpClient) {}

  getCategoriasCNH(): Observable<CategoriasCnhResponse> {
    return this.http.get<CategoriasCnhResponse>(this.cnhUrl);
  }

  getEstados(): Observable<EstadosResponse> {
    return this.http.get<EstadosResponse>(this.estadosUrl);
  }
}
