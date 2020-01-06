import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { ArtikliComponent } from './artikli/artikli.component';
import { ShoppingListaComponent } from './shopping-lista/shopping-lista.component';
import { ArtikliEditComponent } from './artikli/artikli-edit/artikli-edit.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service'; //za canActivate:[AuthService]
import { StrNijePronadjenaComponent } from './str-nije-pronadjena/str-nije-pronadjena.component';

const appPutanje: Routes = [
  { path: '', redirectTo: '/artikli', pathMatch: 'full' },
  { path: 'artikli', component: ArtikliComponent, canActivate:[AuthService]},
  { path: 'shopping-lista', component: ShoppingListaComponent,canActivate:[AuthService]},
  { path: 'novi-artikal', component: ArtikliEditComponent,canActivate:[AuthService] },
  { path: 'registracija', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: StrNijePronadjenaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appPutanje)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
