import { Component} from '@angular/core';



@Component({
  selector: 'app-carousel-moovie',
  templateUrl: './carousel-moovie.component.html',
  styleUrls: ['./carousel-moovie.component.css']
})

export class CarouselMoovieComponent {
  
 
  slidesChangeMessage = '';
 
  slides = [
    {img: './../../assets/pictures/image110.png'},
    {img: './../../assets/pictures/image111.png'},
    {img: './../../assets/pictures/image112.png'},
    {img: './../../assets/pictures/image113.png'},
    {img: './../../assets/pictures/image110.png'},
    {img: './../../assets/pictures/image111.png'},
    {img: './../../assets/pictures/image112.png'},
    {img: './../../assets/pictures/image113.png'}
  ];
 
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
 
  addSlide() {
    this.slides.push({img: './../../assets/pictures/image113.png'})
  }
 
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
 
  afterChange(e) {
    console.log('afterChange');
  }
  
}

