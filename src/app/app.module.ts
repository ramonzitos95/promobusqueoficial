import { ConsultacepService } from './servicos/consultacep.service';
import { CategoriaService } from './servicos/categoria.service';
import { PromocaoService } from './servicos/promocao.service';
import { UsuarioService } from './login/usuario/usuario.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './login/auth.service';
import { EmpresaService } from './servicos/empresa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './login/usuario/usuario.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UsuarioComponent
  ],
  providers: [EmpresaService, AuthService, AuthGuard, UsuarioService, PromocaoService, CategoriaService, ConsultacepService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
