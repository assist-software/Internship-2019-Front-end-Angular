import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesServices } from 'src/app/services/movies.service';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-moovie',
  templateUrl: './add-moovie.component.html',
  styleUrls: ['./add-moovie.component.css']
})
export class AddMoovieComponent implements OnInit {
  addMovie: FormGroup;
  message: string;
  // data =  Date(elem.timestamp);
  // data = '21.12.12';
  // data = new Date().getDate;
  // dataToSend = String(this.data);
  data = Math.floor(Date.now() / 1000);

  movie = {
    title: 'Spider man',
    trailerUrl: 'https://www.youtube.com/watch?v=O7zvehDxttM',
    originalSourceUrl: 'https://www.youtube.com/watch?v=O7zvehDxttM',
    coverUrl: null,
    imdbId: '223',
    imdbScore: 8.7,
    description: 'Spider man spider man',
    releaseDate: this.data,
    category: [
      {
        name: 'Action'
      }
    ]
  };

  constructor(private movieService: MoviesServices) { }

  ngOnInit() {
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
      releaseDate: new FormControl(this.data)
    });
  }


  newMessage(message: any) {
    this.movieService.changeMessage(message);
  }

  Submit() {
    console.log(this.movie);
    // this.addMovie.value.releaseDate = String(this.addMovie.value.releaseDate);\

    this.addMovie.value.imdbScore = +this.addMovie.value.imdbScore;

    const mapped = [this.addMovie.value.category];
    this.addMovie.value.category = mapped;


    console.log('afisam mapped', mapped);

    console.log(this.addMovie.value);

    // this.movieService.postMovie(this.addMovie.value)
    //   .subscribe(
    //     data => {
    //       console.log('data', data);
    //     },
    //     error => {
    //       console.log('error', error);
    //     }
    //   );

    // console.log(this.addMovie.value);

    // this.newMessage(this.addMovie.value);

  }
}
