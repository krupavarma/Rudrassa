import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
contactMethods=[{id:1,m:"Andhra"},{id:2,m:"Telangana"},{id:3,m:"Bangalore"}];
  w(f){
    console.log(f);
  }
  constructor() { }

  ngOnInit() {
  }

}
