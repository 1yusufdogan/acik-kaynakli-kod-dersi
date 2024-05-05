import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtActiveguardService  {

  constructor(private loginservices:LoginService,private router:Router,
    private jwthelperservices:JwtHelperService) { }
   canActivate(route: ActivatedRouteSnapshot): boolean 
   {
    if(this.loginservices.isAuthenticated())
    {
      return true;
    }
    else
    {
      alert('Giriş Yapmanız Gerekmektedir. ')
      this.router.navigateByUrl("/login?redirect="+route.url);
      return false;
    }
   }
}
