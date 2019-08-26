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
    
    images: null,
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
