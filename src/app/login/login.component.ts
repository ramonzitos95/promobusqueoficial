import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  fazerLogin(){
    if(this.usuario != null){
      this.authService.login(this.usuario.email, this.usuario.senha);
    }
  }

  cadastrar(){
    this.router.navigate(['cadastro-usuario']);
  }

}
