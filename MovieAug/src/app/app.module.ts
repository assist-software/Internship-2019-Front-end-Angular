import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
