import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './administrator/add-movie/add-movie.component';
import { ListMoviesAdminComponent } from './administrator/list-movies-admin/list-movies-admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'addMovie', component: AddMovieComponent },
  { path: 'adminMoviesList', component: ListMoviesAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
