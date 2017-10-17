import { routes } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './contact/about/about.component';
import { AddressComponent } from './contact/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PropertyComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,RouterModule,routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
