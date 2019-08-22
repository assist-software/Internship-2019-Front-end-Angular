import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsDatepickerConfig } from 'ngx-bootstrap';


@Component({
  selector: 'app-list-of-next-moovie',
  templateUrl: './list-of-next-moovie.component.html',
  styleUrls: ['./list-of-next-moovie.component.css']
})
export class ListOfNextMoovieComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;

  backgroundImage: any;
  myPicture = 'assets/img/anonymous_finger_goouGu.com.jpg';
  moviesArray = [
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



  constructor(private sanitizer: DomSanitizer) {
    // this.backgoundImage = this.sanitizer.bypassSecurityTrustStyle("'background-image': 'url(" + this.myPicture + ")'");

    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.myPicture})`);
    console.log(this.backgroundImage);
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red' });
  }

}
