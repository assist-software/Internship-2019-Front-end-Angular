import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  MoviShow() {
    this.router.navigate(['movieDetail']);
  }
}
