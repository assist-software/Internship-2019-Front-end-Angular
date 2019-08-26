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
  categorys: any[] = [];

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
      imdbId: new FormControl(''),
      id: new FormControl(),
      images: new FormGroup({})
    });

    this.movieService.getCategory()
      .subscribe(
        data => {
          this.categorys = data;
          console.log(this.categorys);
        },
        error => {
          console.log(error);
        }
      );
  }

  Submit() {
    // convertim imdbScore in int din string
    this.addMovie.value.imdbScore = +this.addMovie.value.imdbScore;

    // adaugam array la images gol
    const modify = [this.addMovie.value.images];
    this.addMovie.value.images = modify;

    // aducem la forma necesara la category
    const mapped = [this.addMovie.value.category];
    this.addMovie.value.category = mapped;

    // de vazut ce trebuie facut cu imdbId
    this.addMovie.value.imdbId = 'new';

    // trebuie convertita data in yy-mm-dd
    // this.addMovie.value.releaseDate = '2019-08-21';
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
    // this.addMovie.reset();
  }
}
