export class Artikal {
  public naziv: string;
  public opis: string;
  public slika: string;
  public cijena: number;
  public kolicina: number = 1;

  constructor(naziv: string, opis: string, slika: string, cijena: number, kolicina = 1) {
    this.naziv = naziv;
    this.opis = opis;
    this.slika = slika;
    this.cijena = cijena;
    this.kolicina = kolicina;
  }
}
