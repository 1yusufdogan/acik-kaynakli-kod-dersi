import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  
  login: Login = new Login();// ilk login bizim verdiğimiz isim , : sonraki kısım tipi , 3. login login boş olmasın diye atama 
  loginErrorMsg:string="";
  constructor(private loginservice: LoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  logincheck() {
    //alert(this.login.username)
    this.loginservice.checkuser(this.login).subscribe(
      (Responce) => {
        
        this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['redirect']);
      },
      (Error) => {
        console.log(Error);
        //alert('wrong User/PWd');
    this.loginErrorMsg="Wrong User/ Password"

      }
    );
  }

}
