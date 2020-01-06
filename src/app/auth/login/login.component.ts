import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.bodyTag.classList.add('login');
    this.htmlTag.classList.add('login');
  }

  ngOnDestroy() {
    this.bodyTag.classList.remove('login');
    this.htmlTag.classList.remove('login');
  }

  navigateToRegister() {
    this.router.navigate(['/registracija']);
  }

  onLogin(form: NgForm) {
    const EMAIL = form.value.email;
    const LOZINKA = form.value.lozinka;
    this.authService.loginUser(EMAIL, LOZINKA);
  }
}
