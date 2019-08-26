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


  idReceived: string;
  addMovie: FormGroup;
  message: string;
  movie: any;
  movie1 = {
    title: 'Spider man',
    trailerUrl: 'https://www.youtube.com/watch?v=O7zvehDxttM',
    originalSourceUrl: 'https://www.youtube.com/watch?v=O7zvehDxttM',
    coverUrl: 'coveruutl',
    imdbId: '223',
    imdbScore: 8.7,
    description: 'Spider man spider man',
    releaseDate: Date.now,
    category: [
      {
        name: 'Action'
      }
    ]
  };

  constructor(
    private movieService: MoviesServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idReceived = this.route.snapshot.paramMap.get('id');
    // this.movie = this.movieService.getMovie(this.idReceived);

    // completezi datele
    this.movie = this.movie1;

    console.log(this.movie.title);
    this.addMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      trailerUrl: new FormControl('', Validators.required),
      originalSourceUrl: new FormControl('', Validators.required),
      coverUrl: new FormControl(''),
      description: new FormControl(''),
      category: new FormGroup({
        name: new FormControl(''),
      }),
      imdbScore: new FormControl(''),
      releaseDate: new FormControl(''),
      imdb_id: new FormControl('')
    });

    this.title = this.movie.title;
    this.trailerUrl = this.movie.trailerUrl;
    this.originalSourceUrl = this.movie.originalSourceUrl;
    this.coverUrl = this.movie.coverUrl;
    this.description = this.movie.description;
    // this.name = this.movie.category[0].name;
    this.name = 'Action';
    this.imdbScore = this.movie.imdbScore;
    this.releaseDate = this.movie.releaseDate;
  }

  Submit() {
    console.log(this.addMovie);
    // this.addMovie.value.releaseDate = String(this.addMovie.value.releaseDate);

    this.addMovie.value.imdb_id = '123';
    this.addMovie.value.imdbScore = +this.addMovie.value.imdbScore;

    const mapped = [this.addMovie.value.category];
    this.addMovie.value.category = mapped;

    console.log('afisam mapped', mapped);

    console.log(this.addMovie.value);

    // this.movieService.changeMessage(this.addMovie.value);
    this.addMovie.reset();
  }
}
