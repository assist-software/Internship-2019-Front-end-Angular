import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ReceiveMessage } from 'src/app/models/receive.model';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})

export class ResetPassComponent implements OnInit {
  resetForm: FormGroup;
  noEmail = false;
  succes = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.userService.resetPassword(this.resetForm.value.email)
      .subscribe(
        (data: ReceiveMessage) => {
          console.log('Am primit pe data ' + data.errorMessage);
          if (data.errorCode === '') {

          }
          // this.router.navigate(['/login']);
        },
        error => {
          console.log('Am primit pe error" ' + error);
        });
  }
}
