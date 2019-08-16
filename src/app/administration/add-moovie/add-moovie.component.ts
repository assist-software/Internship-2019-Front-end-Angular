import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-moovie',
  templateUrl: './add-moovie.component.html',
  styleUrls: ['./add-moovie.component.css']
})
export class AddMoovieComponent implements OnInit {
  addMovie: FormGroup;


  constructor() { }

  ngOnInit() {
    this.addMovie = new FormGroup({
      title: new FormControl('', Validators.required),
      trailerUrl: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      coverUrl: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl('', Validators.required),
      score: new FormControl(''),
      date: new FormControl('')
    });
  }

  addMovieFunction() {
    console.log(this.addMovie.value);
  }



}
