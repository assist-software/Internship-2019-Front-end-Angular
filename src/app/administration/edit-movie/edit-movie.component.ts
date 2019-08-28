import { Component, OnInit } from '@angular/core';
import { MoviesServices } from 'src/app/services/movies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  post = false;
  title;
  trailerUrl;
  originalSourceUrl;
  coverUrl;
  description;
  name;
  imdbScore;
  releaseDate;
  id;
  imdbId;
  category;
  images;


  configurare = {
    dateInputFormat: 'YYYY-MM-DD'
  };

  idReceived: string;
  addMovie: FormGroup;
  message: string;
  movie: Movie;

  constructor(
    private movieService: MoviesServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieService.currentMovie
      .subscribe(
        data => {
          console.log(data);
          this.movie = data;
          this.title = this.movie.title;
          this.trailerUrl = this.movie.trailerUrl;
          this.originalSourceUrl = this.movie.originalSourceUrl;
          this.coverUrl = this.movie.coverUrl;
          this.description = this.movie.description;
          this.category = this.movie.category;
          console.log(this.imdbId);
          this.imdbId = this.movie.imdbId;
          console.log(this.imdbId, 'imdbID');
          this.imdbScore = this.movie.imdbScore;
          this.releaseDate = this.movie.releaseDate;
          this.id = this.movie.id;
          this.images = this.movie.images;
        }
      );

    this.addMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      trailerUrl: new FormControl('', Validators.required),
      originalSourceUrl: new FormControl('', Validators.required),
      coverUrl: new FormControl(''),
      description: new FormControl(''),
      imdbScore: new FormControl(''),
      releaseDate: new FormControl(''),
      imdbId: new FormControl(''),
      id: new FormControl('')
    });


  }

  Submit() {
    this.addMovie.value.title = this.title;
    this.addMovie.value.trailerUrl = this.trailerUrl;
    this.addMovie.value.originalSourceUrl = this.originalSourceUrl;
    this.addMovie.value.imdbId = this.imdbId;
    this.addMovie.value.id = this.id;
    this.addMovie.value.imdbScore = this.imdbScore;
    this.addMovie.value.category = this.category;
    this.addMovie.value.imdbScore = this.imdbScore;
    this.addMovie.value.releaseDate = this.releaseDate;
    this.addMovie.value.description = this.description;
    this.addMovie.value.coverUrl = this.coverUrl;
    this.addMovie.value.images = this.images;

    this.movieService.editMovie(this.addMovie.value).subscribe(
      data => {
        this.movieService.movieSendToEdit(this.addMovie.value);
        this.post = true;
      },
      error => { console.log('error from editMovie', error); }
    );
  }
}
