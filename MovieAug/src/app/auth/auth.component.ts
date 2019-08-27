import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "@app/_services";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isResetMode = false;
  isRegisterMode = false;

  accCreated = false;
  emailSent = false;

  authForms: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";
  succes = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.authForms = new FormGroup({
      fullName: new FormControl(""),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("")
    });
    this.loginMode();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.authForms.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.error = "";
    this.succes = "";
    this.emailSent = false;
    this.accCreated = false;

    // stop here if form is invalid
    if (this.authForms.invalid) {
      return;
    }

    this.loading = true;

    if (this.isLoginMode) {
      this.authenticationService
        .login(this.f.email.value, this.f.password.value)
        .subscribe(
          res => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.error = error.error.message;
            this.loading = false;
          }
        );
    }
    if (this.isRegisterMode) {
      this.authenticationService
        .register(
          this.f.fullName.value,
          this.f.email.value,
          this.f.password.value,
          this.f.password.value
        )
        .pipe(first())
        .subscribe(
          data => {
            this.accCreated = true;
            this.loading = false;
            this.loginMode();
          },
          error => {
            this.error = error.error.message;
            this.loading = false;
          }
        );
    }
    if (this.isResetMode) {
      this.authenticationService
        .reset(this.f.email.value)

        .subscribe(
          data => {
            this.emailSent = true;
            this.loading = false;
            this.loginMode();
          },
          error => {
            this.error = error.error.message;
            this.loading = false;
          }
        );
    }
  }
  loginMode() {
    this.error = "";

    this.isLoginMode = true;
    this.isResetMode = false;
    this.isRegisterMode = false;

    this.authForms.controls["fullName"].clearValidators();
    this.authForms.controls["fullName"].updateValueAndValidity();

    this.authForms.controls["password"].setValidators([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24)
    ]);
    this.authForms.controls["password"].updateValueAndValidity();

    this.authForms.reset();
  }
  registerMode() {
    this.error = "";
    this.emailSent = false;
    this.accCreated = false;

    this.isRegisterMode = true;
    this.isResetMode = false;
    this.isLoginMode = false;

    this.authForms.controls["fullName"].setValidators([Validators.required, Validators.minLength(1),
    Validators.maxLength(50)]);
    this.authForms.controls["fullName"].updateValueAndValidity();

    this.authForms.controls["password"].setValidators([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24)
    ]);
    this.authForms.controls["password"].updateValueAndValidity();

    this.authForms.reset();
  }
  resetMode() {
    this.error = "";
    this.emailSent = false;
    this.accCreated = false;

    this.isResetMode = true;
    this.isRegisterMode = false;
    this.isLoginMode = false;

    this.authForms.controls["fullName"].clearValidators();
    this.authForms.controls["fullName"].updateValueAndValidity();
    this.authForms.controls["password"].clearValidators();
    this.authForms.controls["password"].updateValueAndValidity();

    this.authForms.reset();
  }
}
