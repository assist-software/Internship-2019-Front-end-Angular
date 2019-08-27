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
    { id: 1, name: 'Actiune' },
    { id: 2, name: 'Fantasy' },
    { id: 3, name: 'Western' },
    { id: 4, name: 'Musical' },
    { id: 5, name: 'Comedy' },
    { id: 6, name: 'Cartoon' },
    { id: 7, name: 'Thriller' },
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
      categories: new FormGroup({ name: new FormControl('') }),
      imdbScore: new FormControl(''),
      imdbId: new FormControl(''),
      releaseDate: new FormControl(''),
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
    //window.location.reload();
  }

}