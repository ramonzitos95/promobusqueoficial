import { CategoriaService } from './../../servicos/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModelo } from '../../modelos/CategoriaModelo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-incluir-categoria',
  templateUrl: './incluir-categoria.component.html',
  styleUrls: ['./incluir-categoria.component.scss']
})
export class IncluirCategoriaComponent implements OnInit {

  categoria: CategoriaModelo = new CategoriaModelo();
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
  ) { 
    this.form = this.builder.group({
      Nome: ['Nome', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      Situacao: ['Situacao']
    });

  }

  ngOnInit() {
  }

}
