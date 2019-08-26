import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../../shared/rest-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { movie } from '@app/shared/movie';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movies: any = [];
  @Input() movie: movie;
  @Input() index: number = 0;
  movieID: number;
  movieItem: any = [];
  constructor(private route: ActivatedRoute,
    public restApi: RestApiService,
    public rout: Router
  ) { }

  ngOnInit() {
    this.loadMovie();
  }

  deleteMovie(Id) {
    console.log("delete", Id);
    console.log("test");
    // this.restApi.deleteMovieUser(Id).subscribe(data => {
    //   this.loadMovie()
    // })
    window.location.reload();
  }
  MoviShow(id) {
    console.log("Am ajuns in MovieShow");
    this.rout.navigate(['movieDetail/' + id]);
  }
  loadMovie() {

    // return this.restApi.getMoviesUser().subscribe((data: {}) => {
    //   this.movies = data;
    //   for (let movie of this.movies) {
    //     this.movieItem = movie;

    //   }
    // })
  }
}
