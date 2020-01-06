import { Component, OnInit, OnDestroy } from '@angular/core';
import { Artikal } from '../artikal.model';
import { ArtikliService } from '../artikli.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artikli-lista',
  templateUrl: './artikli-lista.component.html',
  styleUrls: ['./artikli-lista.component.css']
})
export class ArtikliListaComponent implements OnInit, OnDestroy {
  artikli: Artikal[];
  private subscription: Subscription;

  constructor(private artikliService: ArtikliService) { }

  ngOnInit() {
    this.artikli = this.artikliService.getArtikle();
    this.subscription = this.artikliService.promjenjenaLista.subscribe(
      (artikli: Artikal[]) => {
        this.artikli = artikli;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
