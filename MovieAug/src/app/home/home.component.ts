import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { RestApiService } from "../shared/rest-api.service";
import { OrderPipe } from "ngx-order-pipe";
import { MoviesComponent } from "@app/movies/movies.component";
import { movie } from "@app/shared/movie";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { DomSanitizer } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  p: number = 1;
  MaxIMDB = 0;
  movies: any = [];
  movieItem: any = [];
  movie: any = [];
  moviesNew: any = [];
  moviesOld: any = [];
  watchlist: any = [];
  movieID: number;
  nameDrop = "Sort";
  modalRef: BsModalRef;
  currentDate: any;
  myDate = new Date();
  public url;

  constructor(
    public restApi: RestApiService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router,
    private orderPipe: OrderPipe,
    private sanitizer: DomSanitizer,
    private datePipe: DatePipe
  ) {
    this.currentDate = this.datePipe.transform(this.myDate, "yyyy-MM-dd");
  }
  ngOnInit() {
    this.loadMovie();
  }

  loadMovie() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.movies = data;
      for (let movie of this.movies) {
        if (movie.imdbScore > this.MaxIMDB) {
          this.MaxIMDB = movie.imdbScore;
        }
      }
      for (let movie of this.movies) {
        if (movie.imdbScore == this.MaxIMDB) {
          this.movieItem = movie;
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.movieItem.trailerUrl
          );
        }
      }
      this.moviesNew = this.movies
        .filter(m => m.releaseDate >= this.currentDate)
        .slice(0, 8);
      this.moviesOld = this.movies.filter(
        m => m.releaseDate <= this.currentDate
      );
    });
  }
  watchTriler(template: TemplateRef<any>, id) {
    this.movieID = id;
    this.modalRef = this.modalService.show(template);
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

  addWatchlist(id) {
    this.watchlist = JSON.parse(localStorage.getItem("watchlist"));

    if (this.watchlist) {
      this.watchlist.push({ id: id });
    } else {
      this.watchlist = new Array();
      this.watchlist.push({ id: id });
    }
    localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
  }
}
