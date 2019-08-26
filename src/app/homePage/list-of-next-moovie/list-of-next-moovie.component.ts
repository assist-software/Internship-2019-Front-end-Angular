import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { MoviesServices } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';



@Component({
  selector: 'app-list-of-next-moovie',
  templateUrl: './list-of-next-moovie.component.html',
  styleUrls: ['./list-of-next-moovie.component.css']
})
export class ListOfNextMoovieComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;
  moviesArray: Movie[] = [];
  backgroundImage: any;
  movieArraySort = [];
  movieArrayFilter: Movie[] = [];
  categorys = [];
  myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  moviesArray1 = [
    // [ngStyle]="{'background-image': 'url(' + photo + ')'}"
    {
      image: 'assets/img/anonymous_finger_goouGu.com.jpg',
      title: 'Sparta',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: 'drama, triler',
      score: 10,
      date: 12321
    },
    {
      image: 'assets/img/anonymous_finger_goouGu.com.jpg',
      title: 'some text v1',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: 'some text v1',
      score: 9,
      date: 333333
    },
    {
      image: 'assets/img/anonymous_finger_goouGu.com.jpg',
      title: 'Sparta',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: 'drama, triler',
      score: 10,
      date: 12321
    },
    {
      image: 'assets/img/anonymous_finger_goouGu.com.jpg',
      title: 'some text v1',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: 'some text v1',
      score: 9,
      date: 333333
    },
    {
      image: 'assets/img/anonymous_finger_goouGu.com.jpg',
      title: 'Sparta',
      trailerUrl: 'www.google.ro',
      source: 'www.filme-bune.ro',
      coverUrl: 'ww.my-cover.com',
      description: 'aceasta descriere este una foarte buna dar nu stiu despre ce e',
      category: 'drama, triler',
      score: 10,
      date: 12321
    },
    {
      image: 'assets/img/anonymous_finger_goouGu.com.jpg',
      title: 'some text v1',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: 'some text v1',
      score: 9,
      date: 333333
    }
  ];


  constructor(private sanitizer: DomSanitizer,
    private moviesService: MoviesServices) {
    // this.backgoundImage = this.sanitizer.bypassSecurityTrustStyle("'background-image': 'url(" + this.myPicture + ")'");



  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red' });
    this.moviesService.getMovies()
      .subscribe(
        data => {
          this.moviesArray = data;
        })
    this.moviesService.getCategory()
      .subscribe(
        data => {
          this.categorys = data;
          this.categorys.push({ id: this.categorys.length + 1, name: 'Default' });
          console.log('categor', this.categorys);
        },
        error => {
          console.log('error category', error);
        }
      );
      console.log(this.categorys);


  }
  dataChanged(value: string) {
    if (value === 'Default') {
      this.moviesArray = this.movieArraySort;
    } else {
      console.log(value);
      this.moviesArray = this.movieArraySort.filter(movie =>
        movie.category[0].name === value);
    }
    console.log(this.moviesArray);
  }

  filterMovies(value: string) {
    this.moviesArray = this.movieArraySort.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase()) ||
      movie.category[0].name.toLowerCase().includes(value.toLowerCase()) ||
      movie.description.toLowerCase().includes(value.toLowerCase())
    );
  }

}
