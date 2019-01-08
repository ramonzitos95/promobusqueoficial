import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import Swal from 'sweetalert2';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { 
    this.user = afAuth.authState
  }

  public login(mail: string, password: string) {
          return new Promise((resolve, reject) => {
          this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
            localStorage['token'] = user.user.uid;
            Swal('Sucesso', 'Usuário logado com sucesso!', 'success');
            console.log(user);
            this.router.navigate(['']);
          }).catch((error) => { 
            this.validaRetornoFirebase(error);
          });
        }).catch((error) => {
          this.validaRetornoFirebase(error)
        });
      }

  public logout() { 
    this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }

  validaRetornoFirebase(error: any){
    if(error != null)
    {
      if(error.code == "auth/invalid-email")
        Swal('Erro', "O e-mail informado está inválido", 'error');
      else if(error.code == "auth/wrong-password")
        Swal('Erro', "Senha inválida ou o usuário não possui uma senha", 'error');
      else      
        Swal('Erro', error.message, 'error');
      
      this.router.navigate(['/login']);

    }
  }
}
