import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesServices } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-admin-moovie',
  templateUrl: './admin-moovie.component.html',
  styleUrls: ['./admin-moovie.component.css']
})
export class AdminMoovieComponent implements OnInit {
  modalRef: BsModalRef;
  idDeleted: number;
  message;
  limit = 16;

  listMovies: Movie[] = [{
    images: [{ imageUrl: '' }],
    title: '',
    trailerUrl: '',
    originalSourceUrl: '',
    coverUrl: '',
    description: '',
    category: [{
      name: '',
    }],
    imdbScore: 0,
    releaseDate: '',
    imdbId: 0,
  }];
  Movies: Movie[] = [];
  constructor(
    private modalService: BsModalService,
    private moviesService: MoviesServices
  ) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe(
        data => {
          console.log('data', data);
          this.listMovies = data;
          this.listMovies.sort((a, b) => {
            if (a.id > b.id) { return -1; }
            if (a.id < b.id) { return 1; }
            return 0;
          });
          this.Movies = this.listMovies;
          console.log('list movie', this.listMovies);
        },
        error => {
          console.log('error', error);
        }
      );

    this.moviesService.currentMessage.subscribe(message => {
      this.message = message;
      console.log(this.message);
      this.listMovies.unshift(this.message);
    });

    this.moviesService.currentMovie.subscribe(
      data => {
        this.listMovies.splice(this.listMovies.indexOf(this.listMovies.find(id => id.id === data.id)), 1);
        this.listMovies.unshift(data);
      },
      error => {
        console.log(error);
      }
    );

  }


  confirm() {
    const test = typeof (this.idDeleted);
    console.log('A spus da', test);
    this.moviesService.deleteMovie(this.idDeleted).subscribe(
      data => {
        console.log('id este');
        let myVal = 0;
        console.log(this.listMovies.values);
        this.listMovies.map((id, index) => {
          if (id.id === this.idDeleted) {
            myVal = index;
            return index;
          }
        });

        this.listMovies.splice(myVal, 1);
        console.log(this.listMovies.values);

      },
      error => {
        console.log('error', error);
      }
    );
    this.modalRef.hide();
  }

  decline(): void {
    console.log('A spus nu');
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
    // this.idDeleted = id;
    this.idDeleted = id;
    console.log('id-ul la setare', id);
  }

  loadMore() {
    this.limit += 8;
  }

  sendMovie(value) {
    console.log(value);
    this.moviesService.movieSendToEdit(value);
  }

  filterMovies(value: string) {
    this.listMovies = this.Movies.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase()) ||
      movie.category[0].name.toLowerCase().includes(value.toLowerCase()) ||
      movie.description.toLowerCase().includes(value.toLowerCase())
    );
  }
}
