import { Component } from '@angular/core';



@Component({
  selector: 'app-carousel-moovie',
  templateUrl: './carousel-moovie.component.html',
  styleUrls: ['./carousel-moovie.component.css']
})
// implements OnInit
export class CarouselMoovieComponent {

  slidesChangeMessage = '';

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
  totalslides = this.slides.length;
  constructor() { }


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
