import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SlickModule } from 'ngx-slick';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

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
import { AdminNavBarComponent } from './administration/admin-nav-bar/admin-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { JwtModule } from '@auth0/angular-jwt';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ErrorInterceptor } from './models/error.interceptor';
import { UserService } from './services/user.service';
import { MoviesServices } from 'src/app/services/movies.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';


import { PaginationModule } from 'ngx-bootstrap/pagination';
import { EditMovieComponent } from './administration/edit-movie/edit-movie.component';


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
    HomePageComponent,
    AdminNavBarComponent,
    ContactComponent,
    CategoryComponent,
    EditMovieComponent
  ],
  imports: [
    PaginationModule,
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    SlickModule.forRoot(),
    BsDatepickerModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: (tokenGetter),
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserService,
    MoviesServices

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
