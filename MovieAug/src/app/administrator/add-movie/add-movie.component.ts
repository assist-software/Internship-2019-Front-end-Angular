import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  modalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  pageHide() {
    console.log("Hide pageAdm");
    if (!this.modalRef) {
      return;
    }
    console.log("sterge");
    this.modalRef.hide();
    this.modalRef = null;
  }
}
