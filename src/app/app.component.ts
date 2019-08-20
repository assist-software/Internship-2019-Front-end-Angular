import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listAdress = ['/login', '/reset-password', '/register', '/admin-moovie'];
  showNav: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  showNavbar() {
    if (this.listAdress.indexOf(this.router.url) === -1) {
      return this.showNav = true;
    } else {
      return this.showNav = false;
    }

  }
}
