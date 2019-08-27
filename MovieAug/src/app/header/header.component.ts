import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  watchList = JSON.parse(localStorage.getItem("watchlist"));

  watchlistNumber: number;

  constructor(public rout: Router) {
    if (this.watchList)
      this.watchlistNumber = Object.keys(this.watchList).length;
  }

  ngOnInit() { }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    console.log(this.watchList);
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
