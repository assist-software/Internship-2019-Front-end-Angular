import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../../services/movies.service';


@Component({
  selector: 'app-carousel-moovie',
  templateUrl: './carousel-moovie.component.html',
  styleUrls: ['./carousel-moovie.component.css']
})
// implements OnInit
export class CarouselMoovieComponent {
  moviesArray: Movie[] = [];
  slidesChangeMessage = '';
  totalslides: number;
  slides = [
    {
      image: 'assets/pictures/image110.png',
      title: 'Sparta',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: [{
        id: 1,
        name: 'western',
      }],
      score: 10,
      date: '2018-08-15'
    },
    {
      image: 'assets/pictures/image111.png',
      title: 'Aristotel',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: [{
        id: 1,
        name: 'clasic',
      }],
      score: 9,
      date: '2019-08-15'
    },
    {
      image: 'assets/pictures/image112.png',
      title: 'Spanzuratoarea',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: [{
        id: 1,
        name: 'aventura',
      }],
      score: 10,
      date: '2018-08-15'
    },
    {
      image: 'assets/pictures/image113.png',
      title: 'Miracolul',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: [{
        id: 1,
        name: 'comedy',
      }],
      score: 9,
      date: '2018-08-15'
    },
    {
      image: 'assets/pictures/image110.png',
      title: 'Bunastarea',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: [{
        id: 1,
        name: 'drama',
      }],
      score: 10,
      date: '2018-08-15'
    },
    {
      image: 'assets/pictures/image111.png',
      title: 'Visul',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: [{
        id: 1,
        name: 'triler',
      }],
      score: 9,
      date: '2018-08-14'
    }
  ];

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
          this.moviesArray = this.moviesArray.slice(0,10);
          this.totalslides = this.moviesArray.length;
          // this.movi1 = this.moviesArray[0];
          // for (const movie of this.moviesArray) {

          // }
        });
  }

  addSlide() {
    this.slides.push({
      image: 'assets/pictures/image110.png',
      title: 'Bunastarea',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: [{
        id: 1,
        name: 'drama',
      }],
      score: 10,
      date: '2018-08-15'
    });
  }


  removeSlide() {
    this.slides.length = this.slides.length - 1;
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
