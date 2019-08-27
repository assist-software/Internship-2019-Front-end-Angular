import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  private IdUser;
  public url;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('currentUser');
  }
  profil() {
    this.IdUser = JSON.parse(localStorage.getItem("currentUser"));
    this.url = this.router.navigate(['profile/' + this.IdUser.id]);
    console.log("ID:", this.url.id);
  }
}
