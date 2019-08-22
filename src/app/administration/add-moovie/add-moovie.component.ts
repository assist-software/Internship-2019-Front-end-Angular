import { Component, OnInit } from '@angular/core';
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

  constructor(private movieService: MoviesServices) { }

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

    // this.movieService.currentMessage.subscribe(message => {
    //   this.message = message;
    //   console.log(this.message, 'am incercat');
  }


  // newMessage(message: any) {
  //   this.movieService.changeMessage(message);
  // }
  // addMovieFunction() {
  //   console.log(this.addMovie.value);
  // this.newMessage(this.addMovie.value);
}
