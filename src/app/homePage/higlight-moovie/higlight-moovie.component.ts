import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-higlight-moovie',
  templateUrl: './higlight-moovie.component.html',
  styleUrls: ['./higlight-moovie.component.css']
})
export class HiglightMoovieComponent implements OnInit {

  moviehi = {
    image: 'assets/pictures/image 4.2.png',
    title: 'Moonlight',
    trailerUrl: 'www.google.ro',
    source: 'www.filme-bune.ro',
    coverUrl: 'ww.my-cover.com',
    description: 'A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.',
    category: [{
      id: 1,
      name: 'western',
    }],
    score: 10,
    date: 12321
  };

  constructor() { }

  ngOnInit() {
  }

}
