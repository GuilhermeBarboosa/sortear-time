import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  colorVariables: { [key: string]: string } = {};

  urlApi = 'https://back-zof5fryata-uc.a.run.app';

  constructor(private http: HttpClient) {
    this.getAll().subscribe((data: any) => {
      var response = JSON.parse(JSON.stringify(data));
      response.forEach((element: any) => {
        this.colorVariables[element.tipo] = element.cor;
      });
    });
  }

  getById(id: number) {
    return this.http.get(`${this.urlApi}/cores/` + id);
  }

  getAll() {
    return this.http.get(`${this.urlApi}/cores`);
  }
}
