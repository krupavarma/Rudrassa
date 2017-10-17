import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
contactMethods=[{id:1,m:"Home"},{id:2,m:"About"}];
  w(f){
    console.log(f);
  }
  constructor() { }

  ngOnInit() {
  }

}
