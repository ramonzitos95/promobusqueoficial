import { UsuarioService } from './usuario/usuario.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { Router } from '@angular/router';
import { UsuarioModelo } from './usuario/UsuarioModelo';
import Swal from 'sweetalert2';
@Injectable()
export class AuthService {

  usuarioEstaLogado: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  fazerLogin(usuario: Usuario){
    var usuarioModelo = new UsuarioModelo;
    usuarioModelo.Nome = usuario.nome;
    usuarioModelo.Senha = usuario.senha;

    this.usuarioService
    .fazerLogin(usuarioModelo)
    .subscribe(resultado => {
      if(resultado.Sucesso){
        if(resultado.Sucesso == true){

          Swal('Sucesso', resultado.Mensagens[0], 'success');

          this.router.navigate(['dashboard']);

          this.salvaInformacoesNoLocal(resultado.Modelo);

          this.usuarioEstaLogado = true;
          
        } else {

          Swal('Falha', resultado.Mensagens[0], 'warning');

          this.router.navigate(['']);

          this.usuarioEstaLogado = false;
        }
      }
    });
  }

  salvaInformacoesNoLocal(modelo: UsuarioModelo){
    localStorage.setItem("usuario", modelo.Nome);
    localStorage.setItem("idUsuario", modelo.Id.toString());
  }

  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuario");
    localStorage.clear();
    this.router.navigate(['']);
  }

  usuarioLogado() : boolean {
    return this.usuarioEstaLogado;
  }
}
