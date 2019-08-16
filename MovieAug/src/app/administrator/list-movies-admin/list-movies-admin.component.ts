import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RestApiService } from "../../shared/rest-api.service";
@Component({
  selector: 'app-list-movies-admin',
  templateUrl: './list-movies-admin.component.html',
  styleUrls: ['./list-movies-admin.component.css']
})

export class ListMoviesAdminComponent implements OnInit {
  modalRef: BsModalRef;
  movies: any = [];
  movieID: number;
  // movies: any[] = [
  //   { name: "Dr Nice" },
  //   { name: "bla bla" },
  //   { name: "Dr Nice" },
  //   { name: "Dr Nice" },
  //   { name: "Dr Nice" },
  //   { name: "Dr Nice" },
  // ];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    public restApi: RestApiService) { }

  ngOnInit() {
    this.loadMovie()
  }
  // Get employees list
  loadMovie() {
    return this.restApi.getMovie().subscribe((data: {}) => {
      this.movies = data;
      console.log("Json");
      console.log(data);
    })
  }
  newMovie(template: TemplateRef<any>) {
    console.log("Aici");
    //this.router.navigate(['/app-add-movie']); 
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  deleteMovieModal(template: TemplateRef<any>, id) {

    this.movieID = id;
    console.log("Delete", this.movieID);
    this.modalRef = this.modalService.show(template, { class: '.col-md-3 .modal-sm' });
  }
  confirmDeleteMovie() {
    console.log("test");
    this.restApi.deleteMovie(this.movieID).subscribe(data => {
      this.loadMovie()
    })
    this.modalRef.hide();
    this.modalRef = null;

  }
}
