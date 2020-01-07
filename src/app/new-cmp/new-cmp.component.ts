import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-new-cmp]',
  template: `<div>HI {{name}}</div>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  `,
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
title = 'yogesh';
public name = "yogijinkale";
newcomponent = 'welcome new component';
  constructor() {

  }

  ngOnInit() {

  }

  onClickMe() {

  }

  greetUser()
  {
    return "Good Morning";
  }

}
