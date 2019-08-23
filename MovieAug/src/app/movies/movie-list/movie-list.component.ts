import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = [
    { id: "1", IMDBScore: "9.8", title: "Test", ReleaseDate: "23/03/1994", Category: "Adventure", src: "../../../assets/img/img1.png", function: "Add to watchlist" },
    { id: "2", IMDBScore: "9.8", title: "Test", ReleaseDate: "23/03/1994", Category: "Adventure", src: "../../../assets/img/img2.png", function: "Add to watchlist" },
    { id: "3", IMDBScore: "9.8", title: "Test", ReleaseDate: "23/03/1994", Category: "Adventure", src: "../../../assets/img/img3.png", function: "Add to watchlist" },
    { id: "4", IMDBScore: "9.8", title: "Test", ReleaseDate: "23/03/1994", Category: "Adventure", src: "../../../assets/img/img4.png", function: "Add to watchlist" },
    { id: "5", IMDBScore: "9.8", title: "Test", ReleaseDate: "23/03/1994", Category: "Adventure", src: "../../../assets/img/img5.png", function: "Add to watchlist" },
    { id: "6", IMDBScore: "9.8", title: "Test", ReleaseDate: "23/03/1994", Category: "Adventure", src: "../../../assets/img/img6.png", function: "Add to watchlist" }
  ];

  slideConfig = {
    "slidesToShow": 4, "slidesToScroll": 1
  };

  // addSlide() {
  //   this.movies.push({ img: "../../../assets/img/img1.jpg" })
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

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
  constructor() { }

  ngOnInit() {



  }

  @HostListener('window:resize', ['$event'])
  onresize(event) {

    switch (true) {
      case (event.target.innerWidth < 1000):
        this.slideConfig.slidesToShow = 3;

      case (event.target.innerWidth < 500):
        this.slideConfig.slidesToShow = 2;
        break;
    }

    this.ngOnInit();
  }

}
