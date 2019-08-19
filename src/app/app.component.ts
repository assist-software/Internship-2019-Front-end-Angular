import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  condition = false;
  public href;

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log('acest link: ' + this.router.url);
  }
}
