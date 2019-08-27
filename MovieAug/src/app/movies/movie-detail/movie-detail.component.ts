import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../shared/rest-api.service';
// import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies: any = [];
  public url;
  watchlist: any = [];
  currentMovie: any = [];
  currentURL = '';
  constructor(public restApi: RestApiService,
    private sanitizer: DomSanitizer) {
    this.currentURL = window.location.pathname.split('/')[2];
  }

  ngOnInit() {
    this.loadMovie();
  }
  loadMovie() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.movies = data;

      for (let movie of this.movies) {
        if (movie.id == this.currentURL) {
          this.currentMovie = movie;
          console.log("data:", this.currentMovie);
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentMovie.trailerUrl);
        }
      }
    })
  }
  addWatchlist(id) {
    this.watchlist = JSON.parse(localStorage.getItem("watchlist"));

    if (this.watchlist) {
      this.watchlist.push({ id: id });
    } else {
      this.watchlist = new Array();
      this.watchlist.push({ id: id });
    }
    localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
  }

}
