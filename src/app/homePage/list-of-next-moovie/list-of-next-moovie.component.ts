import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { MoviesServices } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-list-of-next-moovie',
  templateUrl: './list-of-next-moovie.component.html',
  styleUrls: ['./list-of-next-moovie.component.css']
})
export class ListOfNextMoovieComponent implements OnInit {
  dateForSort;
  myGroup: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  moviesArray: Movie[] = [];
  backgroundImage: any;
  movieArraySort = [];
  sortBy = 'Default';
  movieArrayFilter: Movie[] = [];
  categorys = [];
  myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  dateVariable = new Date();
  month: number;
  month1: string;
  year: number;


  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) {
    // this.backgoundImage = this.sanitizer.bypassSecurityTrustStyle("'background-image': 'url(" + this.myPicture + ")'");



  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red' });

    this.myGroup = new FormGroup({
      dateForSort: new FormControl()
    });

    this.moviesService.getMovies()
      .subscribe(
        data => {
          this.movieArraySort = data;
          this.month = this.dateVariable.getMonth() + 2;
          this.year = this.dateVariable.getFullYear();

          for (const movie of this.movieArraySort) {

            if (movie.releaseDate.substr(5, 2) === this.month && movie.releaseDate.substr(0, 4) === this.year) {
              this.moviesArray.push(movie);

            }
          }
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
    console.log(this.categorys);


  }
  dataChanged(value: string) {
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

  sortByDate() {
    console.log(this.myGroup.value.dateForSort);

  }

}
