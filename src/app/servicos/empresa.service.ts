import { EmpresaModelo } from './../modelos/EmpresaModelo';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { DataHelperServico } from './datahelper.service';

@Injectable()
export class EmpresaService {


  listaEmpresa: AngularFireList<any>;
  empresaSelecionada: EmpresaModelo = new EmpresaModelo();
  constructor(private firebase :AngularFireDatabase, private dataHelper: DataHelperServico ) { }

  getData(){
    this.listaEmpresa = this.firebase.list('empresas');
    return this.listaEmpresa;
  }

  inserirEmpresa(empresa : EmpresaModelo)
  {
    this.firebase.list('empresas').push({
      RazaoSocial: empresa.RazaoSocial,
      Cnpj: empresa.Cnpj,
      Cep : empresa.Cep,
      Site : empresa.Site,
      Telefone : empresa.Telefone,
      Celular : empresa.Celular,
      Endereco : empresa.Endereco,
      Estado : empresa.Estado,
      Cidade : empresa.Cidade, 
      DataCadastro: this.dataHelper.dataHoje(), 
      DataAlteracao: null,
      QuantidadeFavoritos: empresa.QuantidadeFavoritos,
    }).then((result: any) => {
      console.log(result.key);
    });
  }

  atualizarEmpresa(empresa : EmpresaModelo){
    this.firebase.list('empresas').update(empresa.$Key,
    {
      Key: empresa.$Key,
      RazaoSocial: empresa.RazaoSocial,
      Cnpj: empresa.Cnpj,
      Cep : empresa.Cep,
      Site : empresa.Site,
      Telefone : empresa.Telefone,
      Celular : empresa.Celular,
      Endereco : empresa.Endereco,
      Estado : empresa.Estado,
      Cidade : empresa.Cidade, 
      DataAlteracao: this.dataHelper.dataHoje(),
      QuantidadeFavoritos: empresa.QuantidadeFavoritos,
    }).then((result: any) => {
      console.log(result.key);
    });
  }

  deletarEmpresa($key : string){
    this.listaEmpresa.remove($key);
  }
}
