import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../../services/movies.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-higlight-moovie',
  templateUrl: './higlight-moovie.component.html',
  styleUrls: ['./higlight-moovie.component.css']
})
export class HiglightMoovieComponent implements OnInit {
  messageOF: string;
  backgroundImage: any[] = [];
  moviesArray: Movie[] = [];

  public movi1: Movie = {
    title: '',
    trailerUrl: '',
    originalSourceUrl: '',
    coverUrl: '',
    description: '',
    category: [{
      name: '',
    }],
    imdbScore: 0,
    releaseDate: null,
    id: 1,
    images: null
  };

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {

    this.moviesService.getMovies()
      .subscribe(
        data => {

          this.moviesArray = data;
          for (const movie of this.moviesArray) {
            if (this.movi1.imdbScore < movie.imdbScore) {
              this.movi1 = movie;
            }
          }
        });
  }

  addToWhatchlist(value) {
    const result = this.moviesService.addMovieToWhatchlist(value);
    if (result === true) {
      this.messageOF = 'The movie was successfully added!';
    } else {
      this.messageOF = 'This movie is already in Whatchlist!';
    }
  }

  goTo(value) {
    // this.document.location.href = value;
    console.log('http://' + value);
    window.open('http://' + value, '_blank');
  }
}
