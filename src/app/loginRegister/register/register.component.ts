import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  test = 'un test';

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
    console.log('register' + this.registerForm.value.name);
    // tslint:disable-next-line:max-line-length
    this.userService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.password, this.registerForm.value.name)
      .subscribe(
        data => {
          // console.log('Registration successful', data.errorCode);
        },
        error => {
          // this.alertService.error(error);
          console.log('eror' + error);
          // this.loading = false;
        });
  }
}
