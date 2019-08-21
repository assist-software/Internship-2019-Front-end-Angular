import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { OrderPipe } from 'ngx-order-pipe';
import { MoviesComponent } from '@app/movies/movies.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]

})
export class HomeComponent implements OnInit {
  items: Array<any> = []
  movieID: number;
  index = 0;
  movieItem: any = [];
  movies: any = [];

  constructor(
    public restApi: RestApiService,
    private orderPipe: OrderPipe,


  ) { }


  ngOnInit() {
    this.loadMovie();
  }

  languages = ['Adventure', 'Fantasy', 'Action', 'Horror'];
  // your $or filter
  filter = { language: { $or: ['Adventure', 'Fantasy', 'Horror'] } };



  loadMovie() {

    return this.restApi.getMovies().subscribe((data: {}) => {
      this.movies = data;
      for (let movie of this.movies) {
        this.movieItem = movie;


      }

      // console.log("Json");
      // console.log(data);
    })
  }
}


