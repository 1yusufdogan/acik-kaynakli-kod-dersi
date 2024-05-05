import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyAccount } from './MyAccount';


@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
userName: any;

  

  constructor(private httpclient:HttpClient) { }

  GetMyAccount2(id:number):Observable<any>
  {
    return this.httpclient.get<any>("https://localhost:44333/api/MyAccount/Details?id="+id)
  }
  
  
  postMyAccount(id:number, username:string):Observable<MyAccount>
  {
    return this.httpclient.post<MyAccount>('https://localhost:44333/api/MyAccount'+id+'&username='+username,null)
  }
  updateMyAccount(MyAccount:MyAccount):Observable<MyAccount>
  {
    return this.httpclient.put<MyAccount>('https://localhost:44333/api/MyAccount',MyAccount)
  }
  DeleteMyAccount(id:number):Observable<any>
  {
   
    return this.httpclient.delete<any>("https://localhost:44333/api/MyAccount?id="+id)
  }
  
 
 


}
