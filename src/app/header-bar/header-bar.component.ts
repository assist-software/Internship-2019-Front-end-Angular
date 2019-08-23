import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  numberOfMOvie = 10;
  moviesArray: Movie[] = [];

  constructor() { }

  ngOnInit() {
    const retrievedObject = localStorage.getItem('movieWhatchlist');
    this.moviesArray = JSON.parse(retrievedObject);
    this.numberOfMOvie =  this.moviesArray.length;
  }

}
