import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRoute, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot} from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
///import { delay, tap } from 'rxjs/internal/operators';
import { delay, tap } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorageService, private auth: AuthService, private route: ActivatedRoute) {}

  loggedin : boolean;

  canActivate() {
    const TOKEN_KEY = 'AuthToken';

    const isLoggedIn = localStorage.getItem(TOKEN_KEY); // ... your login logic here
     let url: string = JSON.parse(this.route.snapshot.paramMap.get('previousUrl') as any);
    if (localStorage.getItem(TOKEN_KEY)) {
        ////this.router.navigate(['/home']);
         return true;
    } else {
      this.router.navigate(['/auth/login'], { queryParams : { 'redirectURL' : url }});
      return false;
    } 

    
  }

}