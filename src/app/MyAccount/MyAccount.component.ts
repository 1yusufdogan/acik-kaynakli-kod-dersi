import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MyAccountService } from '../MyAccount.service';
import { MyAccount } from '../MyAccount';


import Swal from 'sweetalert2';
import { FileUploadService } from '../file-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-MyAccount',
  templateUrl: './MyAccount.component.html',
  styleUrl: './MyAccount.component.css',
})
export class MyAccountComponent{
  //MyAccountList:MyAccount[]=[];
  MyAccount:MyAccount=new MyAccount();
  assets: any;
  imageInfos?: Observable<any>;
 
  constructor(private MyAccountService:MyAccountService, private uploadService: FileUploadService, private cd: ChangeDetectorRef){}
  ngOnInit()
  {
    this.Getall2(sessionStorage["currentuserID"]);// bunu silerken ya da kaydederken de alman gerekiyor. 
    this.imageInfos = this.uploadService.getFile();
  this.imageInfos.subscribe(
    data => {
      console.log(data);
      this.cd.detectChanges(); // Change Detection'ı manuel olarak tetikle
    },
    error => console.error('Error in imageInfos:', error)
  );
  }
  
  
  Getall2(id:number)
  {
    this.MyAccountService.GetMyAccount2(id).subscribe(
      (Response)=>{
        this.MyAccount=Response;
        if (this.MyAccount.id == 0)
        {
          this.MyAccountService.postMyAccount(sessionStorage["currentuserID"], sessionStorage["currentuser"]["username"])
        }
        console.log(this.MyAccount);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  
  UpdateClick()
  {
    alert(this.MyAccount.name);
    this.MyAccountService.updateMyAccount(this.MyAccount).subscribe(
      (Response)=>{
        this.MyAccount=Response;
        
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }
  deleteclick()
  {
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        this.MyAccountService.DeleteMyAccount(sessionStorage["currentuserID"]).subscribe(
      
          (response)=>{           
         
        }
        
        )
        
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        ) 
    
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
      }  
    })  
   
  }
  
  PhotoClick()
  {
    
    Swal.fire({
      title:'Fotoğrafınıız değiştirmek istediğinize emin misiniz? (Sadece .jpeg , .png , .jpg formatında )',
      showCancelButton: true,
      confirmButtonText: 'Güncelle',  
      cancelButtonText: 'Hayır',
    })
    this.MyAccountService.updateMyAccount(this.MyAccount).subscribe(
      (Response)=>{
        this.MyAccount=Response;
        
      },
    )
   
  }

  getBlobUrl(blob: Blob): string {
    // Blob nesnesinden URL'yi alma
    return window.URL.createObjectURL(blob);
  }
  
  getBlobName(blob: Blob): string {
    if (blob instanceof File) {
      // Eğer Blob nesnesi bir File nesnesiyse, dosya adını al
      return blob.name;
    } else {
      // Eğer Blob nesnesi bir File değilse, özel bir ad kullan veya boş bir string döndür
      return 'UnknownFileName';
    }
  }
}
