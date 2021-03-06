import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WatchlistComponent } from "./watchlist/watchlist.component";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { AddMovieComponent } from "./administrator/add-movie/add-movie.component";
import { ListMoviesAdminComponent } from "./administrator/list-movies-admin/list-movies-admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "@app/_helper";
import { ContactComponent } from "./contact/contact.component";
import { ProfileComponent } from "./administrator/profile/profile.component";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
  { path: "login", component: AuthComponent },
  { path: "", component: HomeComponent },
  {
    path: "watchlist",
    component: WatchlistComponent
  },
  { path: "category", component: CategoryComponent },
  { path: "addMovie", component: AddMovieComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent },
  {
    path: "profile/:id",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: "movieDetail/:id", component: MovieDetailComponent },
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
export class AppRoutingModule {}
