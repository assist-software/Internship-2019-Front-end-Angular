import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesServices } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-moovie',
  templateUrl: './add-moovie.component.html',
  styleUrls: ['./add-moovie.component.css']
})
export class AddMoovieComponent implements OnInit {
  addMovie: FormGroup;
  message: string;
  // movieTest = {
  //   title: 'Denis 4',
  //   trailerUrl: 'youtube.com/watch?v=rF1F9dIbNqM',
  //   originalSourceUrl: 'https://www.goodboysmovie.com/',
  //   coverUrl: 'https://image.tmdb.org/t/p/original/jIthqo2tQmW8TFN1fYpF8FmVL0o.jpg',
  //   imdbId: 'nigga6',
  //   imdbScore: 6.8,
  //   description: 'A group of young boys on the cusp of becoming teenagers embark on an epic quest in the San Fernando Valley to fix their broken toy before their parents get home.',
  //   releaseDate: '2019-07-18',
  //   category: [
  //     {
  //       name: 'Comedy'
  //     }
  //   ]
  // };

  // category: [{
  //   name: this.selectCategory
  // }];

constructor(private movieService: MoviesServices) { }

ngOnInit() {
  this.addMovie = new FormGroup({
    title: new FormControl('', Validators.required),
    trailerUrl: new FormControl('', Validators.required),
    originalSourceUrl: new FormControl('', Validators.required),
    coverUrl: new FormControl(''),
    description: new FormControl(''),
    category: new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
    }),
    imdbScore: new FormControl(''),
    releaseDate: new FormControl(''),
    imdbId: new FormControl('niga7'),
    id: new FormControl(),
    images: new FormGroup({})
  });
}

Submit() {
  // this.addMovie.value.releaseDate = String(this.addMovie.value.releaseDate);\

  this.addMovie.value.imdbScore = +this.addMovie.value.imdbScore;
  const modify = [this.addMovie.value.images];
  const mapped = [this.addMovie.value.category];
  this.addMovie.value.category = mapped;
  this.addMovie.value.images = modify;

  // this.addMovie.value.title = this.movieTest.title;
  // this.addMovie.value.coverUrl = this.movieTest.coverUrl;
  // this.addMovie.value.originalSourceUrl = this.movieTest.originalSourceUrl;
  // this.addMovie.value.coverUrl = this.movieTest.coverUrl;
  // this.addMovie.value.description = this.movieTest.description;
  // this.addMovie.value.category = this.movieTest.category;
  // this.addMovie.value.releaseDate = this.movieTest.releaseDate;
  // this.addMovie.value.imdbScore = this.movieTest.imdbScore;
  // this.addMovie.value.imdbId = this.movieTest.imdbId;



  // console.log('afisam mapped', mapped);
  this.addMovie.value.imdbId = '142312';
  this.addMovie.value.releaseDate = '2019-08-21';
  // this.addMovie.value.category = this.movieTest.category;
  console.log(this.addMovie.value);

  this.movieService.postMovie(this.addMovie.value)
    .subscribe(
      data => {
        console.log('data', data);
      },
      error => {
        console.log('error', error);
      }
    );

  console.log(this.addMovie.value);

  this.movieService.changeMessage(this.addMovie.value);
  this.addMovie.reset();
}
}
