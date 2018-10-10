import { Usuario } from './../../modelos/Usuario';
import { Observable } from 'rxjs/Observable';
import { UsuarioModelo } from './UsuarioModelo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ResultadoOperacao } from '../../modelos/ResultadoOperacao';


@Injectable()
export class UsuarioService {

  usuario: UsuarioModelo;
  urlCadastrar: string = `${environment.urlBase}Api/Usuario/Gravar`;
  urlFazerLogin: string = `${environment.urlBase}Api/Usuario/FazerLogin`;
  
  constructor(private httpClient: HttpClient) { }

  cadastrar(usuario: UsuarioModelo): Observable<ResultadoOperacao<UsuarioModelo>>{
    return this.httpClient.post<ResultadoOperacao<UsuarioModelo>>(this.urlCadastrar, usuario);
  }

  fazerLogin(usuario: UsuarioModelo): Observable<ResultadoOperacao<UsuarioModelo>>{
    return this.httpClient.post<ResultadoOperacao<UsuarioModelo>>(this.urlFazerLogin, usuario);
  }
}
