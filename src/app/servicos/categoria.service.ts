import { CategoriaModelo } from './../modelos/CategoriaModelo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ResultadoOperacao } from '../modelos/ResultadoOperacao';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  constructor(private httpClient: HttpClient) { 

  }

}
