import { Component, OnInit, OnDestroy } from '@angular/core';
import { Artikal } from '../artikli/artikal.model';
import { Subscription } from 'rxjs';
import { ArtikliService } from '../artikli/artikli.service';

@Component({
  selector: 'app-shopping-lista',
  templateUrl: './shopping-lista.component.html',
  styleUrls: ['./shopping-lista.component.css']
})
export class ShoppingListaComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  dodatiArtikal: Artikal[];
  cijenaTotal = 0;
  total = 0;

  constructor(private artikliService: ArtikliService) { }

  ngOnInit() {
    this.dodatiArtikal = this.artikliService.getDodateArtikle();
    this.subscription = this.artikliService.promjenjenaLista.subscribe(
      (artikli: Artikal[]) => {
        this.dodatiArtikal = artikli;
      }
    );
    this.racunajCijenu();
  }

  racunajCijenu() {
    for (var i = 0; i < this.dodatiArtikal.length; i++) {
      this.cijenaTotal += this.dodatiArtikal[i].cijena * this.dodatiArtikal[i].kolicina;
    }
    return this.total = Math.round(this.cijenaTotal * 100) / 100;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  zaokruzi(broj: number) {
    return broj = Math.round(broj * 100) / 100;
  }

  onizbrisiIzKorpe(i: number) {
    this.artikliService.izbrisiDodatiArtikal(i);
    this.cijenaTotal = 0;
    this.racunajCijenu();
  }

}
