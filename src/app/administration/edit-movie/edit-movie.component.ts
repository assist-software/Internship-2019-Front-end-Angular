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
          this.name = 'Action';
          this.imdbId = this.movie.imdbId;
          console.log(this.imdbId, 'imdbID');
          this.imdbScore = this.movie.imdbScore;
          this.releaseDate = this.movie.releaseDate;
          this.id = this.movie.id;
        }
      );

    this.addMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      trailerUrl: new FormControl('', Validators.required),
      originalSourceUrl: new FormControl('', Validators.required),
      coverUrl: new FormControl(''),
      description: new FormControl(''),
      // category: new FormGroup({
      //   name: new FormControl(''),
      // }),
      imdbScore: new FormControl(''),
      releaseDate: new FormControl(''),
      imdbId: new FormControl(''),
      id: new FormControl('')
    });


  }

  Submit() {
    // console.log(this.addMovie);
    // this.addMovie.value.releaseDate = String(this.addMovie.value.releaseDate);
    this.addMovie.value.title = this.title;
    this.addMovie.value.trailerUrl = this.trailerUrl;
    this.addMovie.value.originalSourceUrl = this.originalSourceUrl;
    this.addMovie.value.imdb_id = this.imdbId;
    this.addMovie.value.id = this.id;
    this.addMovie.value.imdbScore = this.imdbScore;
    const mapped = [this.addMovie.value.category];
    // this.addMovie.value.category = mapped;
    this.addMovie.value.imdbScore = this.imdbScore;
    this.addMovie.value.releaseDate = this.releaseDate;

    // console.log(this.addMovie.value);
    console.log('intra in butt');
    this.movieService.editMovie(this.addMovie.value).subscribe(
      data => { console.log(data); },
      error => { console.log(error); }
    )

    // this.movieService.changeMessage(this.addMovie.value);
  }
}
