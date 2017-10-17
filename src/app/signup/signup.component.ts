import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myFocusVar: boolean = false;
  constructor() { }
isHoussein(){
  return this.myFocusVar = true;
}
  ngOnInit() {
  }

}
