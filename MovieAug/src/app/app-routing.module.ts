import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { AddMovieComponent } from "./administrator/add-movie/add-movie.component";
import { ListMoviesAdminComponent } from "./administrator/list-movies-admin/list-movies-admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "@app/_helper";
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './administrator/profile/profile.component';

const routes: Routes = [
  { path: "login", component: AuthComponent },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "watchlist",
    component: WatchlistComponent,
    canActivate: [AuthGuard]
  },
  { path: "addMovie", component: AddMovieComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "movieDetail", component: MovieDetailComponent, canActivate: [AuthGuard] },
  {
    path: "adminMoviesList",
    component: ListMoviesAdminComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
