import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // pageHide() {
  //   console.log("Hide pageAdm");
  //   if (!this.modalRef) {
  //     return;
  //   }
  //   console.log("sterge");
  //   this.modalRef.hide();
  //   this.modalRef = null;
  // }
  // closeModal(id: number) {
  //   this.modalService.hide(id);

  // }

}
