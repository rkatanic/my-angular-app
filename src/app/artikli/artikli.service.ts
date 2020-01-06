import { Artikal } from './artikal.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ArtikliService {
  index: number;
  editMode = false;
  promjenjenaLista = new Subject<Artikal[]>();

  private dodatiArtikal: Artikal[] = [];
  private artikli: Artikal[] = [
    new Artikal("Laptop DELL", "Laptop DELL Inspiron 15 3573 - NOT12787 Intel® Celeron® N4000 do 2.6GHz, 15.6, 500GB HDD, 4GB", "https://www.specificationsnigeria.com/wp-content/uploads/2017/02/dell-laptop.jpg", 550),
    new Artikal("Slusalice Apple", "APPLE headspeaker - MMEF2ZM/A Bluetooth, bijele", "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/K4/HK432/HK432?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1466178537396", 99),
    new Artikal("Tastatura RAZER", "RAZER tastatura Anansi Expert MMO US - RZ03-00550100-R3M1 Membranski tasteri, EN (US), 5", "https://assets.razerzone.com/eeimages/products/771/razer-dstalk-gallery-1.png", 45.99),
    new Artikal("Printer HP", "HP LaserJet Pro MFP M28w Printer - W2G55A Laser, Mono, A4, bijeli", "http://www.adriatiko.com/photos/products/8/6188/CB092A_HP-Officejet-Pro-8000.jpg", 299.99),
  ];

  constructor(private toastr: ToastrService) { }

  getDodateArtikle() {
    return this.dodatiArtikal.slice();
  }

  getArtikle() {
    return this.artikli.slice();
  }

  getArtikal() {
    return this.artikli[this.index];
  }

  dodajArtikleUShoppingListu(artikal: Artikal) {
    let istiSu: boolean = false;
    let index: number;
    for (let i = 0; i < this.dodatiArtikal.length; i++) {
      if (this.dodatiArtikal[i].naziv == artikal.naziv
        && this.dodatiArtikal[i].opis == artikal.opis
        && this.dodatiArtikal[i].slika == artikal.slika
        && this.dodatiArtikal[i].cijena == artikal.cijena) {
        index = i;
        istiSu = true;
        break;
      }
    }
    if (istiSu) {
      this.dodatiArtikal[index].kolicina++;
      this.toastr.info("Artikal " + artikal.naziv + " je još jednom dodan u listu!", "Ponovo dodan!", { timeOut: 7000 });
    } else {
      this.dodatiArtikal.push(artikal);
      this.toastr.success("Artikal " + artikal.naziv + ' je uspješno dodan u shopping listu!', 'Dodano!', { timeOut: 7000 });
      this.promjenjenaLista.next(this.artikli.slice());
    }
  }

  izbrisiDodatiArtikal(i: number) {
    this.dodatiArtikal.splice(i, 1);
    this.promjenjenaLista.next(this.dodatiArtikal.slice());
    this.toastr.warning("Uspješno ste uklonili artikal sa liste za kupovinu!", "Upozorenje!", { timeOut: 7000 });
  }

  kreirajArtikal(artikal: Artikal) {
    this.artikli.push(artikal);
    this.promjenjenaLista.next(this.artikli.slice());
  }

  updateArtikal(izmjenjenArtikal: Artikal) {
    this.artikli[this.index] = izmjenjenArtikal;
  }

  ukloniArtikal(i: number) {
    this.artikli.splice(i, 1);
    this.promjenjenaLista.next(this.artikli.slice());
    this.toastr.error("Uspješno ste uklonili artikal!", "Uklonjeno!", { timeOut: 7000 });
  }

  setArtikle(artikli: Artikal[]) {
    this.artikli = artikli;
    this.promjenjenaLista.next(this.artikli.slice());
  }

}
