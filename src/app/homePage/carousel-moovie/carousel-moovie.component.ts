import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../../services/movies.service';


@Component({
  selector: 'app-carousel-moovie',
  templateUrl: './carousel-moovie.component.html',
  styleUrls: ['./carousel-moovie.component.css']
})


export class CarouselMoovieComponent implements OnInit {
  moviesArray: Movie[] = [];
  slidesChangeMessage = '';
  totalslides: number;
  messageOF;

  slideConfig = {
    slidesToShow: 4, slidesToScroll: 4, arrows: false,
    centerPadding: 'auto', centerMarging: '0px', centerMode: true, adaptiveHeight: true,
  };

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) { }

  ngOnInit() {

    this.moviesService.getMovies()
      .subscribe(
        data => {

          this.moviesArray = data;
          this.moviesArray = this.moviesArray.reverse();
          this.moviesArray = this.moviesArray.slice(0, 10);
          this.totalslides = this.moviesArray.length;
          // this.movi1 = this.moviesArray[0];
          // for (const movie of this.moviesArray) {

          // }
        });
  }


  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  addToWhatchlist(value) {
    const result = this.moviesService.addMovieToWhatchlist(value);
    if (result === true) {
      this.messageOF = 'The movie was successfully added!';
    } else {
      this.messageOF = 'This movie is already in Whatchlist!';
    }
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
