import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { OrderPipe } from 'ngx-order-pipe';
import { MoviesComponent } from '@app/movies/movies.component';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']

})
export class WatchlistComponent implements OnInit {
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

  deleteMovie(Id) {
    console.log("delete", Id);
    console.log("test");
    this.restApi.deleteMovieUser(Id).subscribe(data => {
      this.loadMovie()
    })
    window.location.reload();
  }

  loadMovie() {

    return this.restApi.getMoviesUser().subscribe((data: {}) => {
      this.movies = data;
      for (let movie of this.movies) {
        this.movieItem = movie;


      }

      // console.log("Json");
      // console.log(data);
    })
  }
}


