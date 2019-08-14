import { Component} from '@angular/core';

@Component({
  selector: 'app-carousel-moovie',
  templateUrl: './carousel-moovie.component.html',
  styleUrls: ['./carousel-moovie.component.css']
})
export class CarouselMoovieComponent {
  itemsPerSlide = 2;
  singleSlideOffset = false;
  noWrap = true;
 
  slidesChangeMessage = '';
 
  slides = [
    {image: './../../assets/pictures/image110.png'},
    {image: './../../assets/pictures/image111.png'},
    {image: './../../assets/pictures/image112.png'},
    {image: './../../assets/pictures/image113.png'},
    {image: './../../assets/pictures/image110.png'},
    {image: './../../assets/pictures/image111.png'},
    {image: './../../assets/pictures/image112.png'},
    {image: './../../assets/pictures/image113.png'}
  ];
 
  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
