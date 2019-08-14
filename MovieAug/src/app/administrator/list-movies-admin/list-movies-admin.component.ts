import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-movies-admin',
  templateUrl: './list-movies-admin.component.html',
  styleUrls: ['./list-movies-admin.component.css']
})

export class ListMoviesAdminComponent implements OnInit {

  movies: any[] = [
    { name: "Dr Nice" },
    { name: "bla bla" },
    { name: "Dr Nice" },
    { name: "Dr Nice" },
    { name: "Dr Nice" },
    { name: "Dr Nice" },
  ];
  constructor(private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
  }
  newMovie() {
    console.log("Aici");
    //this.router.navigate(['/app-add-movie']);
  }
}
