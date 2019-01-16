import { CategoriaService } from './../../servicos/categoria.service';
import { CategoriaModelo } from './../../modelos/CategoriaModelo';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {

  categorias: Array<CategoriaModelo>;

  constructor(
    private categoriaService: CategoriaService
  ) { 
   
  }

  ngOnInit() {
  }
}
