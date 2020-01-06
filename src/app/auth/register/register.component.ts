import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.bodyTag.classList.add('registracija');
    this.htmlTag.classList.add('registracija');
  }
  ngOnDestroy() {
    this.bodyTag.classList.remove('registracija');
    this.htmlTag.classList.remove('registracija');
  }

  onRegister(form: NgForm) {
    const EMAIL = form.value.email;
    const LOZINKA = form.value.lozinka;
    this.authService.registerUser(EMAIL, LOZINKA);
  }

  navigateToPrijava() {
    this.router.navigate(['/login']);
  }
}
