import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtikliService } from '../artikli.service';
import { Artikal } from '../artikal.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artikli-edit',
  templateUrl: './artikli-edit.component.html',
  styleUrls: ['./artikli-edit.component.css']
})
export class ArtikliEditComponent implements OnInit, OnDestroy {
  artikalForm: FormGroup;

  constructor(private artikliService: ArtikliService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this.artikliService.editMode = false;
  }

  onSubmit() {
    const NOVIARTIKAL = new Artikal(
      this.artikalForm.value['naziv'],
      this.artikalForm.value['opis'],
      this.artikalForm.value['slikaURL'],
      this.artikalForm.value['cijena'],
    );

    if (this.artikliService.editMode) {
      this.artikliService.updateArtikal(NOVIARTIKAL);
      this.toastr.info('Artikal je uspješno izmjenjen!', 'Updated!');
    } else {
      this.artikliService.kreirajArtikal(NOVIARTIKAL);
      this.toastr.success('Novi artikal je uspješno kreiran!', 'Uspješno kreiran!'), { timeOut: 7000 };
      this.ocistiFormu();
    }
  }

  private initForm() {
    let artikalNaziv = '';
    let artikalSlikaURL = '';
    let artikalOpis = '';
    let artikalCijena = null;

    if (this.artikliService.editMode) {
      const ARTIKAL = this.artikliService.getArtikal();
      artikalNaziv = ARTIKAL.naziv;
      artikalSlikaURL = ARTIKAL.slika;
      artikalOpis = ARTIKAL.opis;
      artikalCijena = ARTIKAL.cijena;
    }

    this.artikalForm = new FormGroup({
      'naziv': new FormControl(artikalNaziv, [
        Validators.required, Validators.minLength(6)]),
      'slikaURL': new FormControl(artikalSlikaURL, Validators.required),
      'opis': new FormControl(artikalOpis, Validators.required),
      'cijena': new FormControl(artikalCijena, [
        Validators.required, Validators.pattern(/^[1-9]+[0-9.]*$/)
      ])
    });
  }

  ocistiFormu() {
    this.artikalForm.reset();
    this.artikliService.editMode = false;
  }

  otkazi() {
    this.router.navigate(['/artikli']);
  }
}
