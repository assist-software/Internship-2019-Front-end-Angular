import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";
import { fakeBackendProvider } from "./_helper";
import { JwtInterceptor, ErrorInterceptor } from "./_helper";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieItemComponent } from "./movies/movie-list/movie-item/movie-item.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieMainComponent } from "./movies/movie-main/movie-main.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import { FormsComponent } from "./common/forms/forms.component";
import { HomeComponent } from "./home/home.component";
import { AddMovieComponent } from "./administrator/add-movie/add-movie.component";
import { HeaderAdminComponent } from "./administrator/header-admin/header-admin.component";
import { ListMoviesAdminComponent } from "./administrator/list-movies-admin/list-movies-admin.component";
import { AuthComponent } from "./auth/auth.component";
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './administrator/profile/profile.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipe } from './filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';
<<<<<<< HEAD
import { CategoryComponent } from './category/category.component';
=======
import { SlickCarouselModule } from 'ngx-slick-carousel';
>>>>>>> 72e72b39c38e804b0686b7b6f420ace215daa3db

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
    FormsComponent,
    HomeComponent,
    AddMovieComponent,
    HeaderAdminComponent,
    ListMoviesAdminComponent,
    AuthComponent,
    ContactComponent,
    ProfileComponent,
    FilterPipe,
    CategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    NgbModule,
    FilterPipeModule, SlickCarouselModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
