import { CategoriaModelo } from './../modelos/CategoriaModelo';
import { CategoriaService } from './../servicos/categoria.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PromocaoModelo } from './../modelos/PromocaoModelo';
import { Component, OnInit, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { PromocaoService } from '../servicos/promocao.service';
import Swal from 'sweetalert2'
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incluir-promocao',
  templateUrl: './incluir-promocao.component.html',
  styleUrls: ['./incluir-promocao.component.scss']
})
export class IncluirPromocaoComponent implements OnInit {

  promocao: PromocaoModelo = new PromocaoModelo();
  form: FormGroup;
  categorias: Array<CategoriaModelo>;
  categoriaSelecionada: CategoriaModelo; 
  imageSrc: String;
  imagemSelecionada;
  formData = new FormData();

  constructor(
    private builder: FormBuilder,
    private promocaoService: PromocaoService,
    private router: Router,
    private rotaAtivada: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { 

    this.form = this.builder.group({
      Nome: ['Nome', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(50)])],
      DataValidade: ['DataValidade', Validators.compose([Validators.required])],
      Descricao: ['Descricao', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(500)])],
      Situacao: ['Situacao', Validators.required],
      Categoria: ['Categoria']
    });

    //this.obterPromocao();
    this.obterCategorias();
  }

  ngOnInit() {
    
  }

  //Ao mudar a imagem
  readURL(event): void {
    
    if (event.target.files && event.target.files[0]) {

      this.imagemSelecionada = event.target.files[0];
      console.log(this.imagemSelecionada);
      
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = () => {
        this.imageSrc = reader.result.toString();
      }

    }
  }

  // atualizarPromocao(){
    
  //   this.promocao.IdEmpresa = Number.parseInt(this.promocaoService.obterIdEmpresa());
  //   this.promocao.IdCategoria = this.categoriaSelecionada.Id;

  //   if(this.promocao !== null)
  //   {
  //     this.promocao
  //     this.promocaoService
  //       .atualizarPromocao(this.promocao)
  //       .subscribe(resultado => {
  //         if(resultado.Sucesso == true){

  //           Swal('Sucesso', resultado.Mensagens[0], 'success');
  //           this.router.navigate(['/promocoes-list']);
  
  //         } else {
  
  //           Swal('Falha', resultado.Mensagens[0], 'warning');
  //         }
  //       });
  //   }
  // }

  // obterPromocao(){
  //   const id = Number.parseInt(this.rotaAtivada.snapshot.params['id']);
  //   console.log(id);
  //   if(id !== undefined && id > 0){
  //     this.promocaoService
  //       .obterPorId(id)
  //       .subscribe(resposta => this.promocao = resposta);
  //   }
  // }

  obterCategorias(){
    this.categoriaService
      .obterTodasCategorias()
      .subscribe(cats => {
        this.categorias = cats;
      });
  }

  onChangeCategoria(valor){
    console.log(valor);
  }
}


