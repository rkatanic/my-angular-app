import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../artikli/data-storage.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
    private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  sacuvajPodatke() {
    this.dataStorageService.storeArtikle()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
    this.toastr.info("Podaci uspješno sačuvani u bazu podataka!", "Sacuvano!");
  }

  fetching() {
    this.dataStorageService.getArtikle();
    this.toastr.info("Uspješno preuzimanje podataka!", "Fetched!");
  }

  onOdjava(){
    this.authService.logout();
  }
}
