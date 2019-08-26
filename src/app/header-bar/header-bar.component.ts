import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesServices } from '../services/movies.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  numberOfMOvie = 10;
  moviesArray: Movie[] = [];

  constructor(private moviesService: MoviesServices) { }

  ngOnInit() {
    const retrievedObject = localStorage.getItem('movieWhatchlist');
    this.moviesArray = JSON.parse(retrievedObject);
    this.numberOfMOvie = this.moviesArray.length;
    this.moviesService.currentNumber
      .subscribe(
        (data: number) => {
          this.numberOfMOvie = data;
        }
      );
  }

}
