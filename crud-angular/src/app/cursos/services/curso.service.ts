import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, first } from 'rxjs';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpCliente: HttpClient) { }

  private readonly baseUrl: string = '/api/courses';

  listar() {
    return this.httpCliente.get<Curso[]>(this.baseUrl)
      .pipe(
        first(),
        // delay(5000)
      );
  }

}
