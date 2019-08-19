import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(public router: Router) {}
  public location = this.router.url;
  ngOnInit() {}
  onLogin() {
    console.log(this.location);
    this.router.navigate(["/home"]);
  }
}
