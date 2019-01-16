import { PromocaoModelo } from './../modelos/PromocaoModelo';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { DataHelperServico } from './datahelper.service';

@Injectable()
export class PromocaoService {

  listaPromocao: AngularFireList<any>;
  promocaoSelecionada: PromocaoModelo = new PromocaoModelo();

  constructor(private firebase :AngularFireDatabase, private dataHelper: DataHelperServico ) {

  }

  getListPromocoes(){
    var ref = this.firebase.database.ref('promocoes');
    var listaPromocoes = [];

    ref.once("value")
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        listaPromocoes.push({
          $Key: childSnapshot.key,
          Ativa: childSnapshot.child('Ativa').val(),
          DataAlteracao: childSnapshot.child('DataAlteracao').val(),
          DataCadastro: childSnapshot.child('DataCadastro').val(),
          Descricao: childSnapshot.child('Descricao').val(),
          DataValidade: childSnapshot.child('DataValidade').val(),
          IdCategoria: childSnapshot.child('IdCategoria').val(),
          IdEmpresa: childSnapshot.child('IdEmpresa').val(),
          Nome: childSnapshot.child('Nome').val(),
          QuantidadeVisitas: childSnapshot.child('QuantidadeVisitas').val()
        })
      })
    })

    return listaPromocoes;
  }

  inserirPromocao(promocao : PromocaoModelo)
  {
    this.firebase.list('promocoes').push({
      Nome: promocao.Nome,
      Descricao: promocao.Descricao,
      IdCategoria: promocao.IdCategoria,
      IdEmpresa: promocao.IdEmpresa,
      DataValidade: promocao.DataValidade,
      DataCadastro: this.dataHelper.dataHoje(),
      QuantidadeVisitas: promocao.QuantidadeVisitas,
      DataAlteracao: null
    }).then((result: any) => {
      console.log(result.key);
    });
  }

  atualizarPromocao(promocao : PromocaoModelo){
    this.firebase.list('promocoes').update(promocao.$Key,
      {
        Nome: promocao.Nome,
        Descricao: promocao.Descricao,
        IdCategoria: promocao.IdCategoria,
        IdEmpresa: promocao.IdEmpresa,
        DataValidade: promocao.DataValidade,
        QuantidadeVisitas: promocao.QuantidadeVisitas,
        DataAlteracao: this.dataHelper.dataHoje()
      }).then((result: any) => {
        console.log(result.key);
      });
  }

  deletarPromocao($key : string){
    this.listaPromocao.remove($key);
  }

}
