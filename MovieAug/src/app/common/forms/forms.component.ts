import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  onSubmit() {
    this.router.navigate(["/home"]);
  }
}
