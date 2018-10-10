import { CategoriaService } from './../../servicos/categoria.service';
import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { CategoriaModelo } from '../../modelos/CategoriaModelo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incluir-categoria',
  templateUrl: './incluir-categoria.component.html',
  styleUrls: ['./incluir-categoria.component.scss']
})
export class IncluirCategoriaComponent implements OnInit {

  categoria: CategoriaModelo = new CategoriaModelo();
  form: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private rotaAtivada: ActivatedRoute,
    private builder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.builder.group({
      Nome: ['Nome', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      Situacao: ['Situacao']
    });

    this.obterCategoria();
  }

  ngOnInit() {
  }

  obterCategoria(){
    const id = Number.parseInt(this.rotaAtivada.snapshot.params["id"]);
    if(id !== undefined && id > 0){
      this.categoriaService
      .obterPorId(id)
      .subscribe(resposta => {
        this.categoria = resposta;
      });
    } 
  }

  atualizarCategoria(){
      if(this.categoria !== null)
      {
        this.categoria
        this.categoriaService
          .atualizarCategoria(this.categoria)
          .subscribe(resultado => {
            if(resultado.Sucesso == true){
  
              Swal('Sucesso', resultado.Mensagens[0], 'success');
              this.router.navigate(['/categorias-list']);
    
            } else {
    
              Swal('Falha', resultado.Mensagens[0], 'warning');
            }
          });
      }
    
  }

}
