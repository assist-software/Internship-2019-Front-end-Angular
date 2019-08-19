import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

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
  profileForm = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000)),
    title: new FormControl(''),
    trailer: new FormControl(''),
    source: new FormControl(''),
    coverURL: new FormControl(''),
    description: new FormControl(''),
    Category: new FormControl(''),
    IMDBScore: new FormControl(''),
    ReleaseDate: new FormControl(''),
  });

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadMovie(localStorage.getItem('movie'));
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
      console.log(this.profileForm.value);
      this.restApi.createMovie(this.profileForm.value as any).subscribe();
    }
    else {
      console.log("Intra in update");
      this.loadMovie(this.idMovie);
      this.restApi.updateMovie(this.idMovie, this.profileForm.value).subscribe(data => {
      })
    }
    window.location.reload();
  }
  // updateMovie(id) {
  //   console.log("ID Add-movie:", id);
  //   this.restApi.updateEmployee(id, this.profileForm.value).subscribe(data => {
  //   })
  // }

}