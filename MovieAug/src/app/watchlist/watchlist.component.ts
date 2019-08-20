import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']

})
export class WatchlistComponent implements OnInit {


  movies: any = [];
  constructor(
    public restApi: RestApiService,
    private orderPipe: OrderPipe
  ) { }

  ngOnInit() {
    this.loadMovie();
  }


  loadMovie() {
    console.log("Am intrat");
    return this.restApi.getMoviesUser().subscribe((data: {}) => {
      this.movies = data;
      console.log(data);
    })

  }
}
