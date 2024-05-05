import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
login: any;
loginErrorMsg: any;
logincheck() {
throw new Error('Method not implemented.');
}
  title = 'Frontend_Login_Register_Task';
  

  constructor(public loginservice:LoginService){}
  LogoutClick()
  {
    this.loginservice.Logout();
    
  }
  registerClick()
  {
    
  }
}
