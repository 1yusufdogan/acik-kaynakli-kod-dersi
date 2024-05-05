import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtActiveguardService } from './jwt-activeguard.service';
import { MyAccountComponent } from './MyAccount/MyAccount.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { ArastirmacilarComponent } from './arastirmacilar/arastirmacilar.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"MyAccount",component:MyAccountComponent, canActivate:[JwtActiveguardService]},
  {path:"upload-images",component:UploadImagesComponent},
  {path:"arastirmacilar",component:ArastirmacilarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
