import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../services/movies.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  filter;
  // myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  moviesArray: Movie[] = [];
  movieArraySort = [];
  movieArrayFilter: Movie[] = [];
  categorys = [];


  message: any;
  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices,
    config: NgbDropdownConfig
  ) {
    config.placement = 'top-left';
    config.autoClose = false;
  }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(
        data => {
          this.moviesArray = data;
          this.movieArraySort = this.moviesArray;
          this.movieArrayFilter = this.moviesArray;
        });
    this.moviesService.getCategory()
      .subscribe(
        data => {
          this.categorys = data;
          console.log('categor', this.categorys);
        },
        error => {
          console.log('error category', error);
        }
      );
  }

  dataChanged(value: string) {
    if (value === 'Default') {
      this.moviesArray = this.movieArraySort;
    } else {
      console.log(value);
      this.moviesArray = this.movieArraySort.filter(movie =>
        movie.category[0].name === value);
    }
    console.log(this.moviesArray);
  }

  filterMovies(value: string) {
    this.moviesArray = this.movieArraySort.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase()) ||
      movie.category[0].name.toLowerCase().includes(value.toLowerCase()) ||
      movie.description.toLowerCase().includes(value.toLowerCase())
    );
  }
}
