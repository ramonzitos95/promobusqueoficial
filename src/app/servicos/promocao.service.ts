import { PromocaoModelo } from './../modelos/PromocaoModelo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ResultadoOperacao } from '../modelos/ResultadoOperacao';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { getLocaleDateTimeFormat } from '@angular/common';

@Injectable()
export class PromocaoService {

  listaPromocao: AngularFireList<any>;
  constructor(private firebase :AngularFireDatabase ) {

  }

  getData(){
    this.listaPromocao = this.firebase.list('employees');
    return this.listaPromocao;
  }

  insertEmployee(promocao : PromocaoModelo)
  {
    this.listaPromocao.push({
      nome: promocao.Nome,
      descricao: promocao.Descricao,
      idCategoria: promocao.IdCategoria,
      idEmpresa: promocao.IdEmpresa,
      dataValidade: promocao.DataValidade,
      dataCadastro: Date.now,
      quantidadeVisitas: promocao.QuantidadeVisitas,
      foto: promocao.Foto,
      ativa: promocao.Ativa,
      dataAlteracao: null
    });
  }

  updateEmployee(promocao : PromocaoModelo){
    this.listaPromocao.update(promocao.$key,
      {
        nome: promocao.Nome,
        descricao: promocao.Descricao,
        idCategoria: promocao.IdCategoria,
        idEmpresa: promocao.IdEmpresa,
        dataValidade: promocao.DataValidade,
        quantidadeVisitas: promocao.QuantidadeVisitas,
        foto: promocao.Foto,
        ativa: promocao.Ativa,
        dataAlteracao: Date.now
      });
  }

  deleteEmployee($key : string){
    this.listaPromocao.remove($key);
  }

}
