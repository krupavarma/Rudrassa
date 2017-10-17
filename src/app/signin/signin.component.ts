import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
contactMethods=[{id:1,m:"Andhra"},{id:2,m:"Telangana"},{id:3,m:"Bangalore"}];
  w(f){
    console.log(f);
  }
  constructor() { }

  ngOnInit() {
  }

}
