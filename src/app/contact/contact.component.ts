import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: FormGroup;
  sendMessage = false;
  constructor() { }

  ngOnInit() {
    this.contact = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      email: new FormControl(''),
      category: new FormControl('')
    });

  }

  contactFunction() {
    // console.log('Raportul tau va fi trimis');
    console.log(this.contact.value);
    this.sendMessage = true;
    this.contact.reset();
  }
}
