import { ConsultacepService } from './../servicos/consultacep.service';
import { EmpresaService } from './../servicos/empresa.service';
import { EmpresaModelo } from './../modelos/EmpresaModelo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  constructor( private empresaServico: EmpresaService, private cepService: ConsultacepService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(empresaForm: NgForm) {
    
    if (empresaForm.value.$Key == null)
      this.empresaServico.inserirEmpresa(empresaForm.value);
    else
      this.empresaServico.atualizarEmpresa(empresaForm.value);
    this.resetForm(empresaForm);

    Swal('Empresa gravada com sucesso', 'Gravação empresa');
  }

  resetForm(empresaForm?: NgForm) {
    if (empresaForm != null)
      empresaForm.reset();
    this.empresaServico.empresaSelecionada = {
      $Key: null,
      RazaoSocial: '',
      Cnpj: '',
      Cep : '',
      Site : '',
      Telefone : '',
      Celular : '',
      Endereco : '',
      Estado : '',
      Cidade : '', 
      DataCadastro: null, 
      DataAlteracao: null,
      QuantidadeFavoritos: 0,
    }
  }

}
