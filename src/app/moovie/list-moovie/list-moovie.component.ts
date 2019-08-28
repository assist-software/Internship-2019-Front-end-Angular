import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-list-moovie',
  templateUrl: './list-moovie.component.html',
  styleUrls: ['./list-moovie.component.css']
})
export class ListMoovieComponent implements OnInit {
  // backgroundImage: any[] = [];
  // myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  // moviesArray: Movie[] = [];
  numberOfMOvie: number;
  movieArraySort: Movie[] = [];
  moviesArray: Movie[] = [];
  sortBy: string;
  limit = 16;
  testArray = false;


  message: any;

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) {
    // aceasta functie se foloseste in cazul in care avem warning de la domSanitizer
    // this.backgroundImages = this.sanitizer.bypassSecurityTrustStyle(`url(${this.myPicture})`);
  }

  ngOnInit() {

    const retrievedObject = localStorage.getItem('movieWhatchlist');
    this.moviesArray = JSON.parse(retrievedObject);
    this.movieArraySort = this.moviesArray;
    console.log(this.testArray);
    if (this.moviesArray === null) {
      this.testArray = true;
    }
    console.log(this.testArray);

  }

  dataChanged(value) {
    this.sortBy = null;
    if (value === 'imdbScore' || value === 'releaseDate') {
      this.moviesArray.sort((a, b) => {
        if (a[value] > b[value]) { return -1; }
        if (a[value] < b[value]) { return 1; }
        return 0;
      });
    } else {
      this.moviesArray.sort((a, b) => {
        if (a[value] < b[value]) { return -1; }
        if (a[value] > b[value]) { return 1; }
        return 0;
      });
    }
  }

  filterMovies(value) {
    this.moviesArray = this.movieArraySort.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase()) ||
      movie.category[0].name.toLowerCase().includes(value.toLowerCase()) ||
      movie.description.toLowerCase().includes(value.toLowerCase())
    );
  }

  removeFunc(value) {

    let myVal = 0;
    this.moviesArray.map((id, index) => {
      if (id.id === value) {
        myVal = index;
        return index;
      }
    });

    this.moviesArray.splice(myVal, 1);
    localStorage.setItem('movieWhatchlist', JSON.stringify(this.moviesArray));

    this.moviesService.numberMovieWhatchlist(this.moviesArray.length);
  }

  loadMore() {
    this.limit += 8;
  }

}
