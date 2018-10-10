import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { 

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean | Promise<boolean> {
    

    if(!this.authService.usuarioLogado())
    {
      this.router.navigate(['login']);
      return false;
    }
  
    return true;
    
  }
}
