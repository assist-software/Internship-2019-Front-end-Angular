import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {
  userName = 'Mihai';
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  logOutFunc() {
    this.authentication.logout();
  }

}
