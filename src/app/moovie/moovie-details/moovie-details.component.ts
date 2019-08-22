import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moovie-details',
  templateUrl: './moovie-details.component.html',
  styleUrls: ['./moovie-details.component.css']
})
export class MoovieDetailsComponent implements OnInit {
  trailerMovie = 'my movie';
  movie = {
    image: 'assets/img/anonymus_finger_goouGu.com.jpg',
    title: 'The Hustle',
    trailerUrl: 'some text',
    source: 'some text',
    coverUrl: 'some text',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Recusandae iusto soluta, voluptas nihil consectetur, saepe quasi dolor, molestiae iste officia voluptates quos repudiandae omnis labore? In alias eius ipsum voluptatibus',
    category: 'Comedy',
    score: 10,
    date: 12321,
    director: 'Denis'
  };
  constructor() { }

  ngOnInit() { }
}
