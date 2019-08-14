import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './loginRegister/register/register.component';
import { LoginComponent } from './loginRegister/login/login.component';
import { ResetPassComponent } from './loginRegister/reset-pass/reset-pass.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';
import { CarouselMoovieComponent } from './homePage/carousel-moovie/carousel-moovie.component';
import { AddMoovieComponent } from './administration/add-moovie/add-moovie.component';
import { AdminMoovieComponent } from './administration/admin-moovie/admin-moovie.component';
import { ListMoovieComponent } from './moovie/list-moovie/list-moovie.component';
import { MoovieDetailsComponent } from './moovie/moovie-details/moovie-details.component';
import { NewMoovieComponent } from './new-moovie/new-moovie.component';
import { HiglightMoovieComponent } from './homePage/higlight-moovie/higlight-moovie.component';
import { ListOfNextMoovieComponent } from './homePage/list-of-next-moovie/list-of-next-moovie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetPassComponent,
    FooterBarComponent,
    HeaderBarComponent,
    CarouselMoovieComponent,
    AddMoovieComponent,
    AdminMoovieComponent,
    ListMoovieComponent,
    MoovieDetailsComponent,
    NewMoovieComponent,
    HiglightMoovieComponent,
    ListOfNextMoovieComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
