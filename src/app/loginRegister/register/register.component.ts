import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ReceiveMessage } from 'src/app/models/receive.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  test = 'un test';
  emailTaken = false;
  createAccount = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.emailTaken = false;
    this.createAccount = false;
    console.log('register' + this.registerForm.value.name);
    // tslint:disable-next-line:max-line-length
    this.userService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.password, this.registerForm.value.name)
      .subscribe(
        (data: ReceiveMessage) => {
          // this.receive = data;
          console.log('Received data:', data.errorMessage);
          if (data.errorMessage === 'Email is already taken') {
            console.log('ne pare rau dar este luat');
            this.emailTaken = true;
          } else {
            this.createAccount = true;
          }
        },
        error => {
          console.log('eror' + error);
          // Something's wrong
        });
  }
}
