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
      id: new FormControl(Math.floor(Math.random() * 1000)),
      title: new FormControl('', Validators.required),
      trailer: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      coverURL: new FormControl(''),
      description: new FormControl(''),
      Category: new FormControl('', Validators.required),
      IMDBScore: new FormControl(''),
      ReleaseDate: new FormControl(''),
    });
  }
  loadMovie(id) {
    if (id == "-1") {
      this.titleModal = "Add movie";
    }
    else {
      this.titleModal = "Edit movie";
      return this.restApi.getMovie(id).subscribe((data: {}) => {
        this.movies = data;
        console.log("Json:", this.movies.title);
        console.log("JSON END:");

      })
    }
  }
  createMovie() {
    console.log("adauga");
    this.idMovie = localStorage.getItem('movie');
    if (this.idMovie == "-1") {
      console.log(this.addMovie.value);
      this.restApi.createMovie(this.addMovie.value as any).subscribe();
    }
    else {
      console.log("Intra in update");
      this.loadMovie(this.idMovie);
      this.restApi.updateMovie(this.idMovie, this.addMovie.value).subscribe(data => {
      })
    }
    window.location.reload();
  }

}