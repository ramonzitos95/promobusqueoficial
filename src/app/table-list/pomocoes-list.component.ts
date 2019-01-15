import Swal  from 'sweetalert2';
import { PromocaoService } from './../servicos/promocao.service';
import { Component, OnInit } from '@angular/core';
import { PromocaoModelo } from '../modelos/PromocaoModelo';

@Component({
  selector: 'app-table-list',
  templateUrl: './promocoes-list.component.html',
  styleUrls: ['./promocoes-list.component.css']
})
export class PromocoesListComponent implements OnInit {

  promocoes: Array<PromocaoModelo> = new Array<PromocaoModelo>();

  constructor(
    private promocaoService: PromocaoService
  ) { }

  ngOnInit() {
    //this.carregaPromocoes();
  }

  // carregaPromocoes(){
  //   this.promocaoService
  //     .obterTodasPromocoesDaEmpresa()
  //     .subscribe(res => {
  //       this.promocoes = res
  //       console.log(res);
  //     });
  // }

  // excluirPromocao(id: number) {

  //   if(id !== undefined && id > 0){
  //     this.promocaoService
  //       .remover(id)
  //       .subscribe(promocao => {

  //         if(promocao !== null){
  //           Swal('Exclusão', 'Promoção removida com sucesso', 'success');
  //           this.carregaPromocoes();
  //         }
  //         else{
  //           Swal('Exclusão', 'Houve um problema ao excluir a promoção', 'info');
  //         }

  //       })
  //   } else {
  //     console.log('Id indefinido');
  //   }
  // }

}
