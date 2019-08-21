import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]

})
export class HomeComponent implements OnInit {
  MaxIMDB = 0;
  items: Array<any> = []
  movies: any = [];
  movieItem: any = [];
  movie: any = [];
  constructor(public restApi: RestApiService,
    private route: ActivatedRoute,
    private router: Router, ) {
    this.items = [
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
      { name: '../../assets/img/left-arrow.png' },
    ]
  }
  ngOnInit() {
    this.loadMovie()
  }

  loadMovie() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.movies = data;
      for (let movie of this.movies) {
        if (movie.IMDBScore > this.MaxIMDB) {
          console.log(this.MaxIMDB);
          this.MaxIMDB = movie.IMDBScore;
        }
      }
      for (let movie of this.movies) {
        if (movie.IMDBScore == this.MaxIMDB) {
          this.movieItem = movie;
        }
      }
    })
  }
}
