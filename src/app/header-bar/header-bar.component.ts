import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesServices } from '../services/movies.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  numberOfMOvie = 10;
  moviesArray: Movie[] = [];
  isLoggedIn;

  constructor(
    private moviesService: MoviesServices,
    private authenticationServices: AuthenticationService
  ) { }

  ngOnInit() {
    this.verifiLog();
    const retrievedObject = localStorage.getItem('movieWhatchlist');
    this.moviesArray = JSON.parse(retrievedObject);
    if (this.moviesArray === null) {
      this.numberOfMOvie = 0;
    } else {
      this.numberOfMOvie = this.moviesArray.length;
    }

    this.moviesService.currentNumber
      .subscribe(
        (data: number) => {
          this.numberOfMOvie = data;
        }
      );
  }

  verifiLog() {
    this.isLoggedIn = this.authenticationServices.isAuthenticated();
    console.log(this.isLoggedIn);
  }

}
