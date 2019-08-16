import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moovie-details',
  templateUrl: './moovie-details.component.html',
  styleUrls: ['./moovie-details.component.css']
})
export class MoovieDetailsComponent implements OnInit {
  trailerMovie = 'my movie';
  movie = 
    {
      image: 'imagine',
      title: 'some text',
      trailerUrl: 'some text',
      source: 'some text',
      coverUrl: 'some text',
      description: 'some text',
      category: 'some text',
      score: 10,
      date: 12321
    };
  constructor() {}

  ngOnInit() {}
}
