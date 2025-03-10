import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { DocsOutput } from '../interfaces/dto/docs-output';
import { DocsInput } from '../interfaces/input/docs-input';
@Injectable({
  providedIn: 'root',
})
export class RotaService {
  constructor(private http: HttpClient) {}

  HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),

  });

  requestOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),

    }),
    responseType: 'blob' as 'blob',
  };

  urlRota = `${environment.api}/rota`;

  getFilesPath(rotaInput: DocsInput): Observable<DocsOutput[]> {
    return this.http.post<DocsOutput[]>(
      `${this.urlRota}/getFilesPath/`,
      rotaInput,
      {
        headers: this.HttpHeaders,
      }
    );
  }

  downloadFile(rotaInput: DocsInput) {
    return this.http.post(
      `${this.urlRota}/downloadFile/`,
      rotaInput,
      this.requestOptions
    );
  }
}
