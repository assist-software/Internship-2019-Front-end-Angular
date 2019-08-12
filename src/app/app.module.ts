import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './loginRegister/register/register.component';
import { LoginComponent } from './loginRegister/login/login.component';
import { ResetPassComponent } from './loginRegister/reset-pass/reset-pass.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderPartComponent } from './homePage/header-part/header-part.component';
import { CarouselMoovieComponent } from './homePage/carousel-moovie/carousel-moovie.component';
import { LastPartComponent } from './homePage/last-part/last-part.component';
import { AddMoovieComponent } from './administration/add-moovie/add-moovie.component';
import { AdminMoovieComponent } from './administration/admin-moovie/admin-moovie.component';
import { ListMoovieComponent } from './moovie/list-moovie/list-moovie.component';
import { MoovieDetailsComponent } from './moovie/moovie-details/moovie-details.component';
import { NewMoovieComponent } from './new-moovie/new-moovie.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetPassComponent,
    FooterBarComponent,
    HeaderBarComponent,
    HeaderPartComponent,
    CarouselMoovieComponent,
    LastPartComponent,
    AddMoovieComponent,
    AdminMoovieComponent,
    ListMoovieComponent,
    MoovieDetailsComponent,
    NewMoovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
