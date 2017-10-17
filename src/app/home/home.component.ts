import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
contactMethods=[{id:1,m:"Andhra"},{id:2,m:"Telangana"},{id:3,m:"Bangalore"}];
  w(f){
    console.log(f);
  }
  constructor() { }

  ngOnInit() {
  }

}
