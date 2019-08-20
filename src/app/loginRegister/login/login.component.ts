import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  type = 'password';

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  showPassword() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
    
  }
  onSubmit() {
    this.router.navigate(['/']);
    // console.log(this.loginForm.value);
  }
}
