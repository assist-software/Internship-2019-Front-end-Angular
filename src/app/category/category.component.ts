import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from '../services/movies.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  backgroundImage: any[] = [];
  backgroundImages;
  myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  moviesArray: Movie[] = [];
  movieArraySort = [];


  message: any;
  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(
        data => {

          this.moviesArray = data;

          for (const movie of this.moviesArray) {
            const picture = movie.coverUrl;
            this.backgroundImage.push(this.sanitizer.bypassSecurityTrustStyle(`url(${picture})`));
          }
        });

  }
}
