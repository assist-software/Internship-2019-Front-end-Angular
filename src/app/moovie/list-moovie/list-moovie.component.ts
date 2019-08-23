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


  message: any;

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) {
    // aceasta functie se foloseste in cazul in care avem warning de la domSanitizer
    // this.backgroundImages = this.sanitizer.bypassSecurityTrustStyle(`url(${this.myPicture})`);
  }

  ngOnInit() {
    // this.moviesService.getMovies()
    //   .subscribe(
    //     data => {
    //       this.moviesArray = data;
    //       this.movieArraySort = this.moviesArray;
    //       this.numberOfMOvie = this.movieArraySort.length;
    //       console.log('numarul de filme', this.numberOfMOvie);
    //       localStorage.setItem('movieWhatchlist2', JSON.stringify(this.movieArraySort));
    //       localStorage.setItem('movieWhatchlist', JSON.stringify(this.movieArraySort));

    //       console.log(localStorage.getItem('movieWhatchlist2'));
    //     },
    //     error => {
    //       console.log('eror', error);
    //     });
    const retrievedObject = localStorage.getItem('movieWhatchlist');
    this.moviesArray = JSON.parse(retrievedObject);
    this.movieArraySort = this.moviesArray;

  }

  dataChanged(value) {
    console.log(value);
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
    console.log(value);
    this.moviesArray = this.movieArraySort.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase()) ||
      movie.category[0].name.toLowerCase().includes(value.toLowerCase()) ||
      movie.description.toLowerCase().includes(value.toLowerCase())
    );
  }

  removeFunc(value) {
    console.log(value);
    console.log(this.moviesArray);
  }
}
