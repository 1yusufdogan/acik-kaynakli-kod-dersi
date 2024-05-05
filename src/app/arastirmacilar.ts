export interface IArastirmacilar {
  arastirmaciAnaSayfa: IArastirmaciAnaSayfa;
  arastirmaciAkademikIdariDeneyim: IArastirmaciAkademikIdariDeneyim;
  arastirmaciArastirmaAlanlari: IArastirmaciArastirmaAlanlari;
  arastirmaciBasarilarVeTaninirlik: IArastirmaciBasarilarVeTaninirlik;
  arastirmaciBilimselFaaliyetler: IArastirmaciBilimselFaaliyetler;
  arastirmaciDuyurularVeDokumanlar: IArastirmaciDuyurularVeDokumanlar;
  arastirmaciEgitimBilgileri: IArastirmaciEgitimBilgileri;
  arastirmaciIletisim: IArastirmaciIletisim;
  arastirmaciProjePatentVeTasarim: IArastirmaciProjePatentVeTasarim;
  arastirmaciYayinlarVeEserler: IArastirmaciYayinlarVeEserler;
}

export interface IArastirmaciAnaSayfa {
  id: number;
  genelBilgiler: string;
  metrikler: number;
  iletisim: string;
}

export interface IArastirmaciAkademikIdariDeneyim {
  id: number;
  akademikUnvanlar: string;
  akademiDisiDeneyim: number;
  yonetilenTezler: number;
}

export interface IArastirmaciArastirmaAlanlari
{
    id:number;
    arastirmaAlanlari:string;
}

export interface IArastirmaciBasarilarVeTaninirlik 
{
    id:number;
    yillaraGoreYayinVeAtifSayilari:number;
    yayinSayilari:number;

}

export interface IArastirmaciBilimselFaaliyetler 
{
    id:number;
    juriUyelikler:string;
    
}

export interface IArastirmaciDuyurularVeDokumanlar 
{
    id:number;
    duyurularVeDokumanlar:string;

}

export interface IArastirmaciEgitimBilgileri 
{
    id:number;
    egitimBilgileri:string;
    yaptigiTezler:string;
    sertifikaKursVeEgitimler:string;
    
}

export interface IArastirmaciIletisim 
{
    id:number;
    adresBilgileri:string;
    epostaBilgileri:string;
    uluslararasiArastirmaciIdler:string;
    
}

export interface IArastirmaciProjePatentVeTasarim 
{
    id:number;
    desteklenenProjeler:string;
}

export interface IArastirmaciYayinlarVeEserler 
{
    id:number;
    yayinlarVeEserler:string;
    digerDergilerdeYayinlananMakaleler:string;
    hakemliKongreBildiriKitaplarindaYerAlanYayinlar:string;
    kitapBolumleri:string;
    metrikler:string;
}