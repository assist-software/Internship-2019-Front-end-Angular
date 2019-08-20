import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listAdressNav = ['/login', '/reset-password', '/register', '/admin-moovie'];
  listAdressFot = ['/login', '/reset-password', '/register'];
  showNav: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  showNavbar() {
    if (this.listAdressNav.indexOf(this.router.url) === -1) {
      return this.showNav = true;
    } else {
      return this.showNav = false;
    }
  }
  showFooterbar() {
    if (this.listAdressNav.indexOf(this.router.url) === -1) {
      return this.showNav = true;
    } else {
      return this.showNav = false;
    }
  }
}
