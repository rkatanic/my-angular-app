import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-str-nije-pronadjena',
  templateUrl: './str-nije-pronadjena.component.html',
  styleUrls: ['./str-nije-pronadjena.component.css']
})
export class StrNijePronadjenaComponent implements OnInit, OnDestroy {
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  constructor() { }

  ngOnInit() {
    this.bodyTag.classList.add('str-nije-pronadjena');
    this.htmlTag.classList.add('str-nije-pronadjena');

  }

  ngOnDestroy() {
    this.bodyTag.classList.remove('str-nije-pronadjena');
    this.htmlTag.classList.remove('str-nije-pronadjena');
  }

}
