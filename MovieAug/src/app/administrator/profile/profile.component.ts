import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from "../../shared/rest-api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public file: File;
  public url;
  public fileslogo: File;
  UpdateUserForm: FormGroup;
  NameAdmin: FormControl;
  emailAdmin: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  user: any = [];
  Error: string;
  private IdUser;
  public imagePath;
  imgURL: any;
  constructor(
    private rout: Router,
    public restApi: RestApiService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.IdUser = JSON.parse(localStorage.getItem("currentUser"));

    this.UpdateUserForm = new FormGroup({
      id: new FormControl(this.IdUser.id),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      profile_picture: new FormControl('')
    });
    this.loadMovie(this.IdUser.id);
    console.log("In real time", this.UpdateUserForm);
  }
  loadMovie(id) {
    return this.restApi.getUser(id).subscribe((data) => {
      this.user = data;
      console.log("Din DB:", this.user);
    })
  }
  UpdateUserSubmit() {
    //if (this.UpdateUserForm.value.confirmPassword !== this.UpdateUserForm.value.password) {
    // this.Error = " Password and confirmpassword must be the same";
    //}
    //else {
    this.restApi.updateUser(this.IdUser.id, this.UpdateUserForm.value).subscribe(data => {
    })
    // window.location.reload();
    //}

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
  logOut() {
    localStorage.removeItem("currentUser");
    window.location.reload();
  }
  handleFileSelect(evt) {
    var files = evt.target.files;
    this.file = files[0];
    if (files && this.file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
      this.fileslogo = this.file
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    binaryString = btoa(binaryString);
  }
}
