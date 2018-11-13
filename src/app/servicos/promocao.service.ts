import { PromocaoModelo } from './../modelos/PromocaoModelo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ResultadoOperacao } from '../modelos/ResultadoOperacao';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PromocaoService {

  
  promocaoModelo: PromocaoModelo;
  urlAtualizar: string = `${environment.urlBase}Api/Promocao/Gravar`;
  urlObterPorId: string = `${environment.urlBase}Api/Promocao/ObterPorId/`;
  urlRemover: string = `${environment.urlBase}Api/Promocao/Remover/`;
  urlObterTodasDaEmpresa: string = `${environment.urlBase}Api/Promocao/ObterTodasPromocoesPorEmpresa/`;

  constructor(private httpClient: HttpClient) { 

  }

  atualizarPromocao (empresa: PromocaoModelo): Observable<ResultadoOperacao<PromocaoModelo>> {
    return this.httpClient.post<ResultadoOperacao<PromocaoModelo>>(this.urlAtualizar, empresa)
  }


  obterPorId(id: Number){
    return this.httpClient.get<PromocaoModelo>(`${this.urlObterPorId}${id}`);
  }

  remover(id: number){
    return this.httpClient.get<PromocaoModelo>(`${this.urlRemover}${id}`);
  }

  obterTodasPromocoesDaEmpresa(){
    var idEmpresa = Number.parseInt(this.obterIdEmpresa());
    if(idEmpresa !== undefined){
      return this.httpClient.get<Array<PromocaoModelo>>(`${this.urlObterTodasDaEmpresa}${idEmpresa}`);  
    }
  }

  obterIdEmpresa(){
    return localStorage.getItem("idEmpresa");;
  }

}
