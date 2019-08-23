import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { OrderPipe } from 'ngx-order-pipe';
import { MoviesComponent } from '@app/movies/movies.component';
import { movie } from '@app/shared/movie';
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
  nameDrop = 'Sort';
  filteredMoviesByGenre: any = []

  constructor(
    public restApi: RestApiService,
    private orderPipe: OrderPipe

  ) { }


  ngOnInit() {
    this.loadMovie();
  }





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

  sendFilter(sort: string) {
    if (sort === 'titlu') {
      this.movies.sort(this.sortFilterTitle)
      this.nameDrop = 'Title'
    } else if (sort === 'data') {
      this.movies.sort(this.sortFilterData)
      this.nameDrop = 'Data'
    } else if (sort === 'score') {
      this.movies.sort(this.sortFilterScore)
      this.nameDrop = 'IMBD Score'
    } else {
      this.nameDrop = sort;
      let filtered = this.movies.filter(movie => {
        if (movie.Category === sort) {
          return movie
        }

      });

      console.log(filtered)


    }
  }

  sortFilterTitle(c1: movie, c2: movie) {
    if (c1.title > c2.title) return 1
    else if (c1.title === c2.title) return 0
    else return -1;
  }
  sortFilterData(c1: movie, c2: movie) {
    if (c1.ReleaseDate > c2.ReleaseDate) return 1
    else if (c1.ReleaseDate === c2.ReleaseDate) return 0
    else return -1;
  }
  sortFilterScore(c1: movie, c2: movie) {
    if (c1.IMDBScore > c2.IMDBScore) return -1
    else if (c1.IMDBScore === c2.IMDBScore) return 0
    else return 1;

  }

}


