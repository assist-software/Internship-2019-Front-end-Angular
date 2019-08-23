import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../../services/movies.service';


@Component({
  selector: 'app-higlight-moovie',
  templateUrl: './higlight-moovie.component.html',
  styleUrls: ['./higlight-moovie.component.css']
})
export class HiglightMoovieComponent implements OnInit {

  backgroundImage: any[] = [];
  moviesArray: Movie[] = [];
  public movi1: Movie = {
    title: "string",
    trailerUrl: "string",
    originalSourceUrl: "string",
    coverUrl: "string",
    description: "string",
    imdbId: 1,
    category: [{
      id: 1,
      name: "string",
    }],
    imdbScore: 0,
    releaseDate:null ,
    id: 1
  };

  moviehi = {
    image: 'assets/pictures/image 4.2.png',
    title: 'Moonlight',
    trailerUrl: 'www.google.ro',
    source: 'www.filme-bune.ro',
    coverUrl: 'ww.my-cover.com',
    description: 'A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.',
    category: [{
      id: 1,
      name: 'western',
    }],
    score: 10,
    date: 12321
  };

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) { }

  ngOnInit() {

    this.moviesService.getMovies()
      .subscribe(
        data => {

          this.moviesArray = data;
         // this.movi1 = this.moviesArray[0];
          for (const movie of this.moviesArray) {
            if (this.movi1.imdbScore < movie.imdbScore) {
              this.movi1 = movie;
            }
          }
        });
  }

}
