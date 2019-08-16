import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  numberOfMOvie = 10;

  constructor() { }

  ngOnInit() {
  }

}
// /* .centerLink {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: yellow;
// }

// .listLink {
//     margin-top: 30px;
//     /* align-items: center; */
//     /* margin-right: 0%!important;
// } */



// a {
//   font-family: Campton;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height */
//   color: #FFFFFF;
//   /* margin-left: 10%!important; */
//   /* margin-right: 9%!important; */
// }

// /* .navbar {
//   display: inline-block;
//   align-content: center;
//   width: 100%!important;
// } */

// .specialItem {
//   margin-left: 14%;
//   margin-top: 10px;
// } */

// li {
//   /* margin-right: 11%;
//   margin-left: 11%; */
//   display: flex;
//   flex: 1;
// }



// .watchlistButton {
//   margin: 0px;
//   padding: 0px;
//   display: -webkit-box;
// }

// .badge-danger {
//   border-radius: 50%;
// }
