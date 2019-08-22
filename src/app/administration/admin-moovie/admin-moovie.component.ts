import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesServices } from 'src/app/services/movies.service';

@Component({
  selector: 'app-admin-moovie',
  templateUrl: './admin-moovie.component.html',
  styleUrls: ['./admin-moovie.component.css']
})
export class AdminMoovieComponent implements OnInit {
  modalRef: BsModalRef;

  message;

  listMovies = [
    {
      image: 'imagine',
      title: 'some text',
      trailerUrl: 'some text',
      source: 'some text',
      coverUrl: 'some text',
      description: 'some text',
      category: 'some text',
      score: 10,
      date: 12321,
    },
    {
      image: 'imagine2',
      title: 'some text v1',
      trailerUrl: 'some text v1',
      source: 'some text v1',
      coverUrl: 'some text v1',
      description: 'some text v1',
      category: 'some text v1',
      score: 9,
      date: 333333,
    }
  ];
  constructor(
    private modalService: BsModalService,
    private moviesService: MoviesServices
  ) { }

  ngOnInit() {
    this.moviesService.currentMessage.subscribe(message => {
      this.message = message;
      this.listMovies.push(this.message);
      console.log(this.message);
    });
  }

  confirm(): void {
    // this.message = 'Confirmed!';
    console.log('A spus da');
    this.modalRef.hide();
  }

  decline(): void {
    // this.message = 'Declined!';
    console.log('A spus nu');
    this.modalRef.hide();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
