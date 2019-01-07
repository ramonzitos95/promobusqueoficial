import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  usuarioEstaLogado: boolean = false;
  user: Observable<firebase.User>;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { 
    this.user = afAuth.authState
  }

  public login(mail: string, password: string) {
          console.log(mail);
          console.log(password);
          return new Promise((resolve, reject) => {
          this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
          localStorage['token'] = user.user;
          console.log(user);
          this.router.navigate(['']);
        }).catch((error) => { 
          this.router.navigate(['/login']);
          });
        }).catch((error) => {
          this.router.navigate(['/login']);
        });
      }

  public logout() {
    return this.afAuth.auth.signOut();
  }

  // fazerLogin(usuario: Usuario){
  //   var usuarioModelo = new UsuarioModelo;
  //   usuarioModelo.Nome = usuario.email;
  //   usuarioModelo.Senha = usuario.senha;

  //   this.usuarioService
  //   .fazerLogin(usuarioModelo)
  //   .subscribe(resultado => {
  //     if(resultado.Sucesso){
  //       if(resultado.Sucesso == true){

  //         Swal('Sucesso', resultado.Mensagens[0], 'success');

  //         this.router.navigate(['dashboard']);

  //         this.salvaInformacoesNoLocal(resultado.Modelo);

  //         this.usuarioEstaLogado = true;
          
  //       } else {

  //         Swal('Falha', resultado.Mensagens[0], 'warning');

  //         this.router.navigate(['']);

  //         this.usuarioEstaLogado = false;
  //       }
  //     }
  //   });
  // }

  // salvaInformacoesNoLocal(modelo: UsuarioModelo){
  //   localStorage.setItem("usuario", modelo.Nome);
  //   localStorage.setItem("idUsuario", modelo.Id.toString());
  // }

  // logout(){
  //   localStorage.removeItem("usuario");
  //   localStorage.removeItem("idUsuario");
  //   localStorage.clear();
  //   this.router.navigate(['']);
  // }

  // usuarioLogado() : boolean {
  //   return this.usuarioEstaLogado;
  // }
}
