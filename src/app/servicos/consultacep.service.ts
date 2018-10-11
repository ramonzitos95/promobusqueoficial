import { environment } from './../../environments/environment';
import { CepModelo } from './../modelos/CepModelo';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultacepService {

  urlViaCep: string = environment.urlViaCep; 

  constructor(
    private httpClient: HttpClient
  ) { 

  }

  consultarCep(cep: String) : Observable<CepModelo>{
    console.log(this.urlViaCep);
    return this.httpClient.get<CepModelo>(`${this.urlViaCep}${cep}/json`);
  }

  

}
