import {
  Component,
  OnInit,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { movie } from "@app/shared/movie";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnChanges {
  @Input() moviesList: any;
  slideIndex: 4;
  movies: any;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4
  };

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes["moviesList"].currentValue) {
      this.movies = this.moviesList.sort(this.sortFilterData).slice(0, 7);
    }
  }

  sortFilterData(c1: movie, c2: movie) {
    if (c1.releaseDate < c2.releaseDate) return 1;
    //ordonare descrescatoare
    else if (c1.releaseDate === c2.releaseDate) return 0;
    else return -1;
  }
  afterChange(e) {
    // console.log(e);
  }
  @HostListener("window:resize", ["$event"])
  onresize(event) {
    // console.log(this.movies);
  }
}
