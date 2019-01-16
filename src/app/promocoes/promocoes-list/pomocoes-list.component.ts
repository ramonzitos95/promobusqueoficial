import Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { PromocaoModelo } from 'app/modelos/PromocaoModelo';
import { PromocaoService } from 'app/servicos/promocao.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './promocoes-list.component.html',
  styleUrls: ['./promocoes-list.component.css']
})
export class PromocoesListComponent implements OnInit {

  promocoesList: PromocaoModelo[];
  constructor(private promocaoServico: PromocaoService) { }

  ngOnInit() {
    this.carregaPromocoes();
  }

  carregaPromocoes(){
    this.promocoesList = this.promocaoServico.getListPromocoes();
  }

  onEdit(promo: PromocaoModelo) {
    this.promocaoServico.promocaoSelecionada = Object.assign({}, promo);
  }

  onDelete(key: string) {
    if (confirm('Você gostaria de excluir esta promoção ?') == true) {
      this.promocaoServico.deletarPromocao(key);
      Swal("Promoção deletada com sucesso", "Exclusão de promoção");
    }
  }

}
