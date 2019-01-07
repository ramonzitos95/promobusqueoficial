import { UsuarioModelo } from './UsuarioModelo';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModelo = new UsuarioModelo();
  mensagemValidacao: string;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // cadastrar(){
  //   if(this.usuario != null){
  //     if(this.usuario.Nome === "" || this.usuario.Nome == null)
  //       this.mensagemValidacao = "Usuário está vazio!";
  //     else if(this.usuario.Senha === "" || this.usuario.Senha == null)
  //       this.mensagemValidacao = "Senha está vazia!";
  //     else{
  //       this.usuarioService.cadastrar(this.usuario)
  //       .subscribe(resultadoOperacao => {
  //         if(resultadoOperacao.Sucesso == true){
  //           Swal('Sucesso', resultadoOperacao.Mensagens[0], 'success');
  //           this.router.navigate(['login']);
  //         } else {
  //           Swal('Falha', resultadoOperacao.Mensagens[0], 'warning');
  //         }
  //       });
  //     }
  //   }
  // }

}
