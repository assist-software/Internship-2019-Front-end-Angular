import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {
  userName = 'Mihai';
  constructor(
    private authentication: AuthenticationService,
    private userServices: UserService
  ) { }

  ngOnInit() {
    this.userServices.userDetails();
    // .subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  logOutFunc() {
    this.authentication.logout();
  }

}
