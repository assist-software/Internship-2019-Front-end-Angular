import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  genMovies = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Animation' },
    { id: 4, name: 'Comedy' },
    { id: 5, name: 'Crime' },
    { id: 6, name: 'Documentary' },
    { id: 7, name: 'Drama' },
    { id: 8, name: 'Family' },
    { id: 9, name: 'Fantasy' },
    { id: 10, name: 'History' },
    { id: 11, name: 'Romance' },
    { id: 8, name: 'Thriller' },
    { id: 9, name: 'Western' },
    { id: 10, name: 'Science Fiction' },
    { id: 11, name: 'War' },
  ]
  titleModal = "Add movie";
  movies: any = [];
  modalRef: BsModalRef;
  closeBtnName: string;
  id: number;
  idMovie: string;
  titltControl: FormControl;
  addMovie: FormGroup;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadMovie(localStorage.getItem('movie'));
    this.addMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      trailerUrl: new FormControl('', Validators.required),
      originalSourceUrl: new FormControl('', Validators.required),
      coverUrl: new FormControl(''),
      description: new FormControl(''),
      categories: new FormGroup({ name: new FormControl('', Validators.required) }),
      imdbScore: new FormControl('', Validators.max(10)),
      imdbId: new FormControl(''),
      releaseDate: new FormControl('', Validators.pattern('^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$')),
    });
    console.log("test cosmin:", this.addMovie);
  }
  loadMovie(id) {
    if (id == "-1") {
      this.titleModal = "Add movie";
    }
    else {
      this.titleModal = "Edit movie";
      return this.restApi.getMovie(id).subscribe((data: {}) => {
        this.movies = data;
      })
    }
  }
  createMovie() {
    console.log("adauga");
    this.idMovie = localStorage.getItem('movie');
    if (this.idMovie == "-1") {

      console.log(this.addMovie.value);
      const mapped = [this.addMovie.value.categories];
      this.addMovie.value.categories = mapped;
      this.restApi.createMovie(this.addMovie.value as any).subscribe();
    }
    else {
      console.log("Intra in update");
      this.loadMovie(this.idMovie);
      const mapped = [this.addMovie.value.categories];
      this.addMovie.value.categories = mapped;
      this.restApi.updateMovie(this.idMovie, this.addMovie.value).subscribe(data => {
      })
    }
    window.location.reload();
  }

}