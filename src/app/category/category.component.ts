import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../services/movies.service';
import { reduce } from 'rxjs/operators';
// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


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
          console.log('categor', this.categorys);
        },
        error => {
          console.log('error category', error);
        }
      );


    // this.movieArraySort = this.movieArrayFilter;
    // this.moviesArray = this.movieArraySort;
    // this.moviesArray.map((movie =>
    //   this.categorys.push(movie.category[0].name)
    // return 'x';
    // ));
    console.log(this.categorys);
  }


  dataChanged(value: string) {
    console.log(value);
    if (value === 'Default') {
      this.moviesArray = this.movieArraySort;
      this.sortBy = null;
    } else {
      console.log(value);
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
    console.log(this.moviesService.addMovieToWhatchlist(value));
  }

  loadMore() {
    // console.log('limit', this.limit);
    // this.moviesArray = this.movieArrayFilter;
    // this.limit = this.limit + 5;

    // console.log('filmele de afisat', this.moviesArray);
    // this.moviesArray.length = this.limit;
    // console.log('filmele de afisat dupa update:', this.moviesArray);
    // console.log('baza', this.movieArrayFilter);

    // a doua incercare
    // this.movieArraySort.length = this.limit;
    // this.limit = this.limit + 5;
    // // console.log('baza', this.movieArrayFilter);
    // console.log('primul vectore', this.movieArraySort);
    // this.moviesArray = this.movieArraySort;
    // console.log('vectorul de afisat', this.moviesArray);
    // this.movieArraySort = this.movieArrayFilter;
    // console.log('baza', this.movieArrayFilter);

    this.limit += 8;

  }
}
