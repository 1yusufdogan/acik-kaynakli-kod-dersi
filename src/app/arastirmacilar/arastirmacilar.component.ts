import { Component, OnInit, inject } from '@angular/core';
import { IArastirmaciAkademikIdariDeneyim, IArastirmaciAnaSayfa, IArastirmaciArastirmaAlanlari, IArastirmaciBasarilarVeTaninirlik, IArastirmaciBilimselFaaliyetler, IArastirmaciDuyurularVeDokumanlar, IArastirmaciEgitimBilgileri, IArastirmaciIletisim, IArastirmaciProjePatentVeTasarim, IArastirmaciYayinlarVeEserler, IArastirmacilar } from '../arastirmacilar';
import { ArastirmacilarService } from '../arastirmacilar.service';


@Component({
  selector: 'app-arastirmacilar',
  templateUrl: './arastirmacilar.component.html',
  styleUrls: ['./arastirmacilar.component.css']
})
export class ArastirmacilarComponent implements OnInit {

  constructor(private arastirmaciService:ArastirmacilarService){}
  // arastirmaciAnaSayfa: IArastirmaciAnaSayfa;
  // arastirmaciAkademikIdariDeneyim: IArastirmaciAkademikIdariDeneyim;
  // arastirmaciArastirmaAlanlari: IArastirmaciArastirmaAlanlari;
  // arastirmaciBasarilarVeTaninirlik: IArastirmaciBasarilarVeTaninirlik;
  // arastirmaciBilimselFaaliyetler: IArastirmaciBilimselFaaliyetler;
  // arastirmaciDuyurularVeDokumanlar: IArastirmaciDuyurularVeDokumanlar;
  // arastirmaciEgitimBilgileri: IArastirmaciEgitimBilgileri;
  // arastirmaciIletisim: IArastirmaciIletisim;
  // arastirmaciProjePatentVeTasarim: IArastirmaciProjePatentVeTasarim;
  // arastirmaciYayinlarVeEserler: IArastirmaciYayinlarVeEserler;
currentTab:number=1;
maxTab:number=10;

arastirmaci: IArastirmacilar = {
  "arastirmaciAnaSayfa" : {} as IArastirmaciAnaSayfa,
  "arastirmaciAkademikIdariDeneyim": {} as IArastirmaciAkademikIdariDeneyim,
  "arastirmaciArastirmaAlanlari": {} as IArastirmaciArastirmaAlanlari,
  "arastirmaciBasarilarVeTaninirlik": {} as IArastirmaciBasarilarVeTaninirlik,
  "arastirmaciBilimselFaaliyetler": {} as IArastirmaciBilimselFaaliyetler,
  "arastirmaciDuyurularVeDokumanlar": {} as IArastirmaciDuyurularVeDokumanlar,
  "arastirmaciEgitimBilgileri": {} as IArastirmaciEgitimBilgileri,
  "arastirmaciIletisim": {} as IArastirmaciIletisim,
  "arastirmaciProjePatentVeTasarim": {} as IArastirmaciProjePatentVeTasarim,
  "arastirmaciYayinlarVeEserler": {} as IArastirmaciYayinlarVeEserler
} as IArastirmacilar;

  ngOnInit() {
  }

  nextPrev(step:number){
    this.currentTab+=step;
    this.currentTab=this.currentTab>this.maxTab?this.maxTab:this.currentTab;
    this.currentTab=this.currentTab<1?1:this.currentTab;
  }

  saveArastirmaci()
  {
      this.arastirmaciService.postArastirmaci(this.arastirmaci).subscribe(
        (Response)=>{});
  }
}
