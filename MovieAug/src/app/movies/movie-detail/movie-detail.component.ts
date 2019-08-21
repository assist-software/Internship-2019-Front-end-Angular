import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../shared/rest-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any;
  movies: any = [];
  constructor(public restApi: RestApiService, ) { }

  ngOnInit() {
    this.loadMovie();
  }
  loadMovie() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.movies = data;
      console.log("Mocies:", this.movies);
    })
  }
}
