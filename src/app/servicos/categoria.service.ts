import { CategoriaModelo } from './../modelos/CategoriaModelo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ResultadoOperacao } from '../modelos/ResultadoOperacao';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  categoria: CategoriaModelo;
  urlGravar: string = `${environment.urlBase}Api/Categoria/Gravar`;
  urlObterPorId: string = `${environment.urlBase}Api/Categoria/ObterPorId/`;
  urlRemover: string = `${environment.urlBase}Api/Categoria/Remover/`;
  urlObterTodas: string = `${environment.urlBase}Api/Categoria/ObterTodasCategorias`;

  constructor(private httpClient: HttpClient) { 

  }

  atualizarCategoria (categoria: CategoriaModelo): Observable<ResultadoOperacao<CategoriaModelo>> {
    return this.httpClient.post<ResultadoOperacao<CategoriaModelo>>(this.urlGravar, categoria)
  }

  obterPorId(id: Number){
    return this.httpClient.get<CategoriaModelo>(`${this.urlObterPorId}${id}`);
  }

  remover(id: number){
    return this.httpClient.get<CategoriaModelo>(`${this.urlRemover}${id}`);
  }

  obterTodasCategorias(){
    return this.httpClient.get<Array<CategoriaModelo>>(`${this.urlObterTodas}`);
  }


}
