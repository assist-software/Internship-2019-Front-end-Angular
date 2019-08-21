import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  type = 'password';
  authenticationDate = false;


  constructor(
    private router: Router,
    // private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  helper = new JwtHelperService();


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this.authenticationService.logout();
  }


  showPassword() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (data: HttpResponse<any>) => {
          const token = localStorage.getItem('token');
          const decodedToken = this.helper.decodeToken(token);

          if (this.authenticationService.isAuthenticated()) {
            if (decodedToken.rol[0] === 'Admin') {
              this.router.navigate(['/admin-moovie']);
            } else {
              this.router.navigate(['/']);
            }
          } else {
            if (data.body.errorMessage === 'Wrong credentials') {
              this.authenticationDate = true;
            }
          }
        },

        error => {
          console.log('Ce primeste error: ' + error);
        });
  }
}
