import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtikliComponent } from './artikli/artikli.component';
import { ArtikliListaComponent } from './artikli/artikli-lista/artikli-lista.component';
import { ArtikliItemComponent } from './artikli/artikli-lista/artikli-item/artikli-item.component';
import { ShoppingListaComponent } from './shopping-lista/shopping-lista.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ArtikliService } from './artikli/artikli.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtikliEditComponent } from './artikli/artikli-edit/artikli-edit.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './artikli/data-storage.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';
import { StrNijePronadjenaComponent } from './str-nije-pronadjena/str-nije-pronadjena.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtikliComponent,
    ArtikliListaComponent,
    ArtikliItemComponent,
    ShoppingListaComponent,
    ArtikliEditComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    StrNijePronadjenaComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [ArtikliService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
