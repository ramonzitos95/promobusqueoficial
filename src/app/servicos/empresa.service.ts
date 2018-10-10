import { DadosQuantidadeGerencialModelo } from './../modelos/DadosQuantidadeGerencialModelo';
import { ResultadoOperacao } from './../modelos/ResultadoOperacao';
import { environment } from './../../environments/environment';
import { EmpresaModelo } from './../modelos/EmpresaModelo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmpresaService {

  empresaModelo: EmpresaModelo;
  urlAtualizar: string = `${environment.urlBase}Api/Empresa/Gravar`;
  urlObterPorIdUsuario: string = `${environment.urlBase}Api/Empresa/ObterPorIdUsuario/`;
  urlObterQtds: string = `${environment.urlBase}Api/Empresa/ObterQuantidadesGerencial/`;

  constructor(private httpClient: HttpClient) { 

  }

  atualizarEmpresa (empresa: EmpresaModelo): Observable<ResultadoOperacao<EmpresaModelo>> {
    return this.httpClient.post<ResultadoOperacao<EmpresaModelo>>(this.urlAtualizar, empresa)
  }

  obterPorIdUsuario(id: Number){
    return this.httpClient.get<EmpresaModelo>(`${this.urlObterPorIdUsuario}${id}`);
  }

  obterQuantidadeGerencialEmpresa(id: number){
    return this.httpClient.get<DadosQuantidadeGerencialModelo>(`${this.urlObterQtds}${id}`);
  }
  

}
