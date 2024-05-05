import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IArastirmacilar } from './arastirmacilar';

@Injectable({
  providedIn: 'root'
})
export class ArastirmacilarService {

  currentAnaSayfa:any;
  currentEgitimBilgileri:any;
  currentAkademikIdariDeneyim:any;
  currentArastirmaAlanlari:any;
  currentBasarilarVeTaninirlik:any;
  currentBilimselFaaliyetler:any;
  currentDuyurularVeDokumanlar:any;
  currentIletisim:any;
  currentProjePatentVeTasarim:any;
  currentYayinlarVeEserler:any;
  
  
  constructor(private httpclient:HttpClient) { }

    
  getArastirmaciByıd(id:number):Observable<any>
  {
    
    return this.httpclient.get<any>('https://localhost:44333/api/arastirmaci',{params:{id}}).pipe(map (u=>{
      alert("ere");
    if(u)
      {
        this.currentAnaSayfa=u.ArastirmaciAnaSayfa
        this.currentEgitimBilgileri=u.ArastirmaciEgitimBilgileri
        this.currentAkademikIdariDeneyim=u.ArastirmaciAkademikIdariDeneyim
        this.currentArastirmaAlanlari=u.ArastirmaciArastirmaAlanlari
        this.currentBasarilarVeTaninirlik=u.ArastirmaciBasarilarVeTaninirlik
        this.currentBilimselFaaliyetler=u.ArastirmaciBilimselFaaliyetler
        this.currentDuyurularVeDokumanlar=u.ArastirmaciDuyurularVeDokumanlar
        this.currentIletisim=u.ArastirmaciIletisim
        this.currentProjePatentVeTasarim=u.ArastirmaciProjePatentVeTasarim
        this.currentYayinlarVeEserler=u.ArastirmaciYayinlarVeEserler
        
      }
      return u;
    }))
  }

  postArastirmaci(arastirmaci:IArastirmacilar):Observable<any>
  {
    return this.httpclient.post<IArastirmacilar>('https://localhost:44333/api/arastirmaci',arastirmaci)
  }
  

}
