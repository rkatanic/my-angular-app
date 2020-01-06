import { Component, OnInit, Input } from '@angular/core';
import { Artikal } from '../../artikal.model';
import { ArtikliService } from '../../artikli.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artikli-item',
  templateUrl: './artikli-item.component.html',
  styleUrls: ['./artikli-item.component.css']
})
export class ArtikliItemComponent implements OnInit {
  @Input() artikal: Artikal;
  @Input() index: number;

  constructor(private artikliService: ArtikliService,
    private router: Router) { }

  ngOnInit() {
  }

  onDodajUShoppingListu() {
    this.artikliService.dodajArtikleUShoppingListu(this.artikal);
  }

  ukloniArtikal() {
    this.artikliService.ukloniArtikal(this.index);
  }

  editArtikal() {
    this.artikliService.editMode = true;
    this.artikliService.index = this.index;
    this.router.navigate(['/novi-artikal']);
  }

}
