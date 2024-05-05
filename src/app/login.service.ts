import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Login } from './login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentID:any;
  currentUserName:any;
  currentPassword:any;
  currentToken:any;
  constructor(private httpclient:HttpClient,private router:Router,
    private Jwthelperservice:JwtHelperService) { }

    
  checkuser(lg:Login):Observable<Login>
  {
    
    return this.httpclient.post<Login>("https://localhost:44333/api/Register/authenticate",lg).pipe(map (u=>{
      if(u)
      {
        console.log(u);
        this.currentID = u.id;
        this.currentUserName=u.username;
        this.currentPassword=u.userPassword;
        this.currentToken=u.userToken;
        sessionStorage["currentuserID"]=u.id;
        sessionStorage["currentuser"]=JSON.stringify(u);
      }
      return u;
    }))
  }


  Logout()
  {
    this.currentUserName="";
    sessionStorage.removeItem("currentuser");
    this.router.navigateByUrl("/login");
  }
  public isAuthenticated():boolean
  {
    if(this.Jwthelperservice.isTokenExpired())
    {
      return false;
    }
    else
    {
      return true;
    }
  }

}

