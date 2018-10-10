import { ConsultacepService } from './../servicos/consultacep.service';
import { EmpresaService } from './../servicos/empresa.service';
import { EmpresaModelo } from './../modelos/EmpresaModelo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ResultadoOperacao } from '../modelos/ResultadoOperacao';
import Swal from 'sweetalert2'
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  empresa: EmpresaModelo = new EmpresaModelo();
  resposta: any;
  idUsuario: number;
  form: FormGroup;

  constructor(
    private empresaServico: EmpresaService,
    private builder: FormBuilder,
    private cepService: ConsultacepService
  ) 
  {
    this.obterEmpresaPorIdUsuario();
    this.form = this.builder.group({
      RazaoSocial: ['RazaoSocial', Validators.required],
      Cnpj: ['Cnpj', Validators.required ],
      Cep: ['Cep', Validators.compose([Validators.required])], 
      Site: ['Site', Validators.compose([Validators.required])],
      Cidade: ['Cidade', Validators.required],
      Endereco: ['Endereco', Validators.required],
      Estado: ['Estado', Validators.required],
      Telefone: ['Telefone', Validators.required],
      Celular: ['Celular', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  atualizarEmpresa(){

    this.empresa.Id = this.getIdEmpresa();
    this.empresa.IdUsuario = this.getIdUsuario();

    this.empresaServico
      .atualizarEmpresa(this.empresa)
      .subscribe(resultadoOperacao => {
        if(resultadoOperacao.Sucesso == true){

          Swal('Sucesso', resultadoOperacao.Mensagens[0], 'success');

          this.salvaEmpresaLocalStorage(resultadoOperacao.Modelo);

        } else {

          Swal('Falha', resultadoOperacao.Mensagens[0], 'warning');
        }
      });
  }

  obterEmpresaPorIdUsuario(){
    var idUsuario = this.getIdUsuario();

    if(idUsuario > 0){
      this.empresaServico
        .obterPorIdUsuario(idUsuario)
        .subscribe(res => {
          if(res === null)
            this.empresa = new EmpresaModelo();
          else
            this.empresa = res
        });
    }
  }

  getIdUsuario() : Number {
    return parseInt(localStorage.getItem("idUsuario"));
  }

  getIdEmpresa() : Number {
    var idEmpresa = parseInt(localStorage.getItem("idEmpresa"));
    return (idEmpresa > 0) ? idEmpresa : 0;
  }

  salvaEmpresaLocalStorage(empresa: EmpresaModelo){
    localStorage.setItem("idEmpresa", empresa.Id.toString());
  }

  getcep(cep: string){
    this.cepService
      .consultarCep(cep)
      .subscribe(resposta => {
        console.log(resposta);
      });
  }

}
