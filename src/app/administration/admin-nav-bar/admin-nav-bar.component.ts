import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {
  userName = 'Mihai';
  constructor() { }

  ngOnInit() {
  }

}
