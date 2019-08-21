import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './loginRegister/login/login.component';
import { RegisterComponent } from './loginRegister/register/register.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';
import { ResetPassComponent } from './loginRegister/reset-pass/reset-pass.component';
import { AddMoovieComponent } from './administration/add-moovie/add-moovie.component';
import { AdminMoovieComponent } from './administration/admin-moovie/admin-moovie.component';
import { ListMoovieComponent } from './moovie/list-moovie/list-moovie.component';
import { MoovieDetailsComponent } from './moovie/moovie-details/moovie-details.component';
import { NewMoovieComponent } from './new-moovie/new-moovie.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPassComponent },
  { path: 'add-moovie', component: AddMoovieComponent },
  { path: 'admin-moovie', component: AdminMoovieComponent, canActivate: [AuthGuard] },
  { path: 'list-moovie', component: ListMoovieComponent },
  { path: 'movie-details', component: MoovieDetailsComponent },
  { path: 'new-movie', component: NewMoovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
