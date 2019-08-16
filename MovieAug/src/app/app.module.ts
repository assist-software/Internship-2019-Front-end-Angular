import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { FooterComponent } from './footer/footer.component';
import { MovieMainComponent } from './movies/movie-main/movie-main.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './common/forms/forms.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './administrator/add-movie/add-movie.component';
import { HeaderAdminComponent } from './administrator/header-admin/header-admin.component';
import { ListMoviesAdminComponent } from './administrator/list-movies-admin/list-movies-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    FooterComponent,
    MovieMainComponent,
    MovieDetailComponent,
    WatchlistComponent,
    LoginComponent,
    ResetComponent,
    RegisterComponent,
    FormsComponent,
    HomeComponent,
    AddMovieComponent,
    HeaderAdminComponent,
    ListMoviesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
