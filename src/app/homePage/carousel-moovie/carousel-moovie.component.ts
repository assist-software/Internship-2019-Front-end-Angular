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
    { img: './../../assets/pictures/image110.png' },
    { img: './../../assets/pictures/image111.png' },
    { img: './../../assets/pictures/image112.png' },
    { img: './../../assets/pictures/image113.png' },
    { img: './../../assets/pictures/image110.png' },
    { img: './../../assets/pictures/image111.png' },
    { img: './../../assets/pictures/image112.png' },
    { img: './../../assets/pictures/image113.png' }
  ];

  slideConfig = {
    slidesToShow: 4, slidesToScroll: 4, arrows: false,
    centerPadding: 'auto', centerMarging: '0px', centerMode: true, adaptiveHeight: true,
  };

  constructor() { }



  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
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
