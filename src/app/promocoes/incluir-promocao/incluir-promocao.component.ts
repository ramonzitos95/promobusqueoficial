import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PromocaoModelo } from 'app/modelos/PromocaoModelo';
import { CategoriaModelo } from 'app/modelos/CategoriaModelo';
import { PromocaoService } from 'app/servicos/promocao.service';
import { CategoriaService } from 'app/servicos/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incluir-promocao',
  templateUrl: './incluir-promocao.component.html',
  styleUrls: ['./incluir-promocao.component.scss']
})
export class IncluirPromocaoComponent implements OnInit {

  promocao: PromocaoModelo = new PromocaoModelo();
  form: FormGroup;
  categoriaSelecionada: CategoriaModelo; 
  categorias: Array<CategoriaModelo>;

  constructor(
    private promocaoServico: PromocaoService
  ) { 

  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(promocaoForm: NgForm) {
    console.log(promocaoForm.value);
    if (promocaoForm.value.$Key == null)
      this.promocaoServico.inserirPromocao(promocaoForm.value);
    else
      this.promocaoServico.atualizarPromocao(promocaoForm.value);
    this.resetForm(promocaoForm);

    Swal(`Promoção gravada com sucesso`, 'Gravação empresa');
  }

  resetForm(promocaoForm?: NgForm) {
    if (promocaoForm != null)
    {
      promocaoForm.reset();
      this.promocaoServico.promocaoSelecionada = {
        $Key: null,
        DataValidade: null,
        Descricao: '',
        IdCategoria: '',
        Nome: '',
        IdEmpresa: '',
        QuantidadeVisitas: 0,
        Ativa: 0,
        DataAlteracao: null,
        DataCadastro: null
      }
    }
  }  
  
  onChangeCategoria(categoria: CategoriaModelo){
    console.log(categoria);
  }
}


