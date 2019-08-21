import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesServices } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-list-moovie',
  templateUrl: './list-moovie.component.html',
  styleUrls: ['./list-moovie.component.css']
})
export class ListMoovieComponent implements OnInit {
  backgroundImage: any[] = [];
  backgroundImages;
  myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  moviesArray: Movie[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private moviesService: MoviesServices
  ) {
    // this.backgoundImage = this.sanitizer.bypassSecurityTrustStyle(''background-image': 'url(' + this.myPicture + ')'');
    // this is corect;
    // this.backgroundImages = this.sanitizer.bypassSecurityTrustStyle(`url(${this.myPicture})`);
  }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(
        data => {
          // console.log(data);
          this.moviesArray = data;
          // console.log(this.moviesArray);
          for (const movie of this.moviesArray) {
            const picture = movie.coverUrl;
            this.backgroundImage.push(this.sanitizer.bypassSecurityTrustStyle(`url(${picture})`));
            console.log('url ', movie.coverUrl);
          }
          console.log('imagini', this.backgroundImage);
        });

  }

}
