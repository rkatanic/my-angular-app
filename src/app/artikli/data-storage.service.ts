import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ArtikliService } from './artikli.service';
import { Artikal } from './artikal.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private artikliService: ArtikliService,
    private authService: AuthService) { }

  storeArtikle() {
    const TOKEN = this.authService.getToken();

    return this.httpClient.put<Artikal[]>('https://ng-projekat.firebaseio.com/artikli.json?auth=' + TOKEN,
      this.artikliService.getArtikle());

    //    const req = new HttpRequest('PUT', 'https://ng-projekat.firebaseio.com/artikli.json',
    //    this.artikliService.getArtikle());
    //    return this.httpClient.request(req);
  }

  getArtikle() {
    const TOKEN = this.authService.getToken();

    return this.httpClient.get<Artikal[]>('https://ng-projekat.firebaseio.com/artikli.json?auth=' + TOKEN)
      .subscribe(
        (artikli) => {
          //const ARTIKLI: Artikal[] = response.json();
          this.artikliService.setArtikle(artikli);
        }
      );
  }

}
