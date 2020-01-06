import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diplomski rad Radivoje Katanic';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyChVRqRSMP7H-qIrSYYELBgAOQgdZ97Y9A",
      authDomain: "ng-projekat.firebaseapp.com"
    });
  }

}
