import * as firebase from 'firebase';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private toastr: ToastrService) { }

  registerUser(email: string, lozinka: string) {
    firebase.auth().createUserWithEmailAndPassword(email, lozinka).then(
      response => {
        this.toastr.success('Registracija uspješna!', 'Registracija!');
        this.router.navigate(['/login']);
      }
    )
      .catch(
        error => {
          console.log(error);
          this.toastr.error(error);
        });
  }
  loginUser(email: string, lozinka: string) {
    firebase.auth().signInWithEmailAndPassword(email, lozinka)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => { this.token = token }

            );
          this.toastr.success('Prijavljivanje uspješno!', 'Dobrodošli!');
        }
      ).catch(
        error => {
          console.log(error);
          this.toastr.error(error);
        });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => { this.token = token }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login']);
    this.toastr.info('Upravo ste se odjavili!', 'Odjava');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated();
  }
}
