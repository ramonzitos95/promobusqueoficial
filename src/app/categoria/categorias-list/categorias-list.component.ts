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
   this.carregaCategorias();
  }

  ngOnInit() {
  }

  carregaCategorias(){
    this.categoriaService
    .obterTodasCategorias()
    .subscribe(res => {
      console.log(res);
      this.categorias = res;
    });
  }

  excluirCategoria(id: number){
    if(id != undefined && id > 0){
      this.categoriaService
        .remover(id)
        .subscribe(promocao => {

          if(promocao !== null){
            Swal('Exclusão', 'Categoria removida com sucesso', 'success');
            this.carregaCategorias();
          }
          else{
            Swal('Exclusão', 'Houve um problema ao excluir a categoria', 'info');
          }

        })
    } else {
      console.log('Id da categoria indefinido!');
    }
  }
}
