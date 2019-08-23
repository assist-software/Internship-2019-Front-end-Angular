import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesServices } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moovie-details',
  templateUrl: './moovie-details.component.html',
  styleUrls: ['./moovie-details.component.css']
})
export class MoovieDetailsComponent implements OnInit {
  trailerMovie = 'my movie';
  idReceived: any;
  movie: Movie[] = [];
  movieToShow: any = [];
  // movie = {
  //   image: 'assets/img/anonymus_finger_goouGu.com.jpg',
  //   title: 'The Hustle',
  //   trailerUrl: 'some text',
  //   source: 'some text',
  //   coverUrl: 'some text',
  // tslint:disable-next-line:max-line-length
  //   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Recusandae iusto soluta, voluptas nihil consectetur, saepe quasi dolor, molestiae iste officia voluptates quos repudiandae omnis labore? In alias eius ipsum voluptatibus',
  //   category: 'Comedy',
  //   score: 10,
  //   date: 12321,
  //   director: 'Denis'
  // };
  constructor(
    private route: ActivatedRoute,
    private moviesServices: MoviesServices
  ) { }

  ngOnInit() {
    this.idReceived = this.route.snapshot.paramMap.get('id');
    console.log(this.movieToShow);
    console.log('id-ul este', this.idReceived);
    this.moviesServices.getMovies()
      .subscribe(
        data => {
          this.movie = data;
          this.idReceived = +this.idReceived;
          this.movieToShow = this.movie.find(id => id.id === this.idReceived);

          // console.log('lista dupa cautatre', this.movieToShow);
          // console.log('lista dupa cautatre', this.movieToShow.imdbId);

        },
        error => {
          console.log('error', error);
        }
      );

    // this.movieToShow = this.movie.filter(x => x.id === idReceived)[0];
    // console.log(this.movieToShow);
  }

  // searchId(id) {
  //   // console.log('id-ul este', id);
  //   return id === this.idReceived;
  // }

}
