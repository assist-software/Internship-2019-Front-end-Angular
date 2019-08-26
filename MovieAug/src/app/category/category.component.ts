import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { RestApiService } from "../shared/rest-api.service";
import { OrderPipe } from "ngx-order-pipe";
import { MoviesComponent } from "@app/movies/movies.component";
import { movie } from "@app/shared/movie";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  MaxIMDB = 0;
  items: Array<any> = [];
  movies: any = [];
  movieItem: any = [];
  movie: any = [];
  movieID: number;
  nameDrop = "Sort";
  moviees: any = [];
  constructor(
    public restApi: RestApiService,
    private route: ActivatedRoute,
    private router: Router,
    private orderPipe: OrderPipe
  ) {}

  ngOnInit() {
    this.loadMovie();
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
    });
  }
  sendFilter(sort: string) {
    if (sort === "titlu") {
      this.movies.sort(this.sortFilterTitle);
      this.nameDrop = "Title";
    } else if (sort === "data") {
      this.movies.sort(this.sortFilterData);
      this.nameDrop = "Data";
    } else if (sort === "score") {
      this.movies.sort(this.sortFilterScore);
      this.nameDrop = "IMBD Score";
    } else {
      this.nameDrop = sort;
      let filtered = this.movies.filter(movie => {
        if (movie.Category === sort) {
          return movie;
        }
      });
      console.log(filtered);
    }
  }
  sortFilterTitle(c1: movie, c2: movie) {
    if (c1.title > c2.title) return 1;
    else if (c1.title === c2.title) return 0;
    else return -1;
  }
  sortFilterData(c1: movie, c2: movie) {
    if (c1.releaseDate > c2.releaseDate) return 1;
    else if (c1.releaseDate === c2.releaseDate) return 0;
    else return -1;
  }
  sortFilterScore(c1: movie, c2: movie) {
    if (c1.imdbScore > c2.imdbScore) return -1;
    else if (c1.imdbScore === c2.imdbScore) return 0;
    else return 1;
  }
  filters(sort) {
    this.movies.filter(movie => {
      if (movie.Category === sort) return (this.moviees = movie);
    });
  }
  filterFunction(): any[] {
    if (this.nameDrop === "Sort") {
      return this.movies;
    } else return this.movies.filter(movie => movie.Category === this.nameDrop);
  }
}
