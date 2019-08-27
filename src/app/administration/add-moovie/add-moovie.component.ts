import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesServices } from 'src/app/services/movies.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-moovie',
  templateUrl: './add-moovie.component.html',
  styleUrls: ['./add-moovie.component.css']
})
export class AddMoovieComponent implements OnInit {
  addMovie: FormGroup;
  message: string;
  categorys: any[] = [];
  post = false;
  myError = false;
  configurare = {
    dateInputFormat: 'YYYY-MM-DD'
  };
  constructor(
    private movieService: MoviesServices,
    private cd: ChangeDetectorRef) { }

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

    // console.log(this.addMovie.value);

    this.movieService.postMovie(this.addMovie.value)
      .subscribe(
        (data: any) => {
          // console.log(data, "post movie");
          if ('NoMovieFound' === data.errorMessage) {
            this.myError = true;
          } else {
            this.movieService.changeMessage(this.addMovie.value);
            this.post = true;
            this.cd.detectChanges();
            this.addMovie.reset();
          }

        },
        error => {
          console.log('error', error);
        }
      );
  }

  cleanForm() {
    this.addMovie.reset();
  }
}
