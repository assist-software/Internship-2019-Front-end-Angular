import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public file: File;
  public fileslogo: File;
  addMovie: FormGroup;
  public imagePath;
  imgURL: any;
  constructor() { }

  ngOnInit() {
  }
  preview(files) {
    console.log("Add img");
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  handleFileSelect(evt) {
    console.log("Am intrat in add img", evt);
    var files = evt.target.files;
    this.file = files[0];
    if (files && this.file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
      this.fileslogo = this.file
    }
    console.log("Am iesit din add img", this.fileslogo);
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    binaryString = btoa(binaryString);
  }
}
