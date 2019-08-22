import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../shared/rest-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies: any = [];
  currentMovie: any = [];
  currentURL = '';
  constructor(public restApi: RestApiService, ) {
    this.currentURL = window.location.pathname.split('/')[2];
  }

  ngOnInit() {
    this.loadMovie();
    console.log("URL:", this.currentURL);
  }
  loadMovie() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.movies = data;
      for (let movie of this.movies) {
        if (movie.id == this.currentURL) {
          this.currentMovie = movie;
          console.log("Film curent trailer :", this.currentMovie);
        }
      }
    })
  }
}
