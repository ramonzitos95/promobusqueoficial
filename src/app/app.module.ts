import { ConsultacepService } from './servicos/consultacep.service';
import { CategoriaService } from './servicos/categoria.service';
import { PromocaoService } from './servicos/promocao.service';
import { UsuarioService } from './login/usuario/usuario.service';
import { AuthService } from './login/auth.service';
import { EmpresaService } from './servicos/empresa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule, FirebaseOptionsToken } from "angularfire2";
import { AngularFireAuth, AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './login/usuario/usuario.component';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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

export class AppModule { 

}

