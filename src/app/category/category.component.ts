import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../services/movies.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  moviesArray: Movie[] = [];
  movieArraySort: Movie[] = [];
  movieArrayFilter: Movie[] = [];
  categorys = [];
  result: boolean;
  sortBy = 'Default';
  limit = 16;
  message: any;
  messageOF;

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices,
  ) { }

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
          this.categorys.push({ id: this.categorys.length + 1, name: 'Default' });
        },
        error => {
          console.log('error categories', error);
        }
      );
  }


  dataChanged(value: string) {
    if (value === 'Default') {
      this.moviesArray = this.movieArraySort;
      this.sortBy = null;
    } else {
      this.moviesArray = this.movieArraySort.filter(movie =>
        movie.category[0].name === value);
      this.sortBy = value;
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

  addMovie(value) {
    const result = this.moviesService.addMovieToWhatchlist(value);
    if (result === true) {
      this.messageOF = 'The movie was successfully added!';
    } else {
      this.messageOF = 'This movie is already in Whatchlist!';
    }
  }

  loadMore() {
    this.limit += 8;
  }
}
