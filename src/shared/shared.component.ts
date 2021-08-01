import { Component, OnInit } from '@angular/core';
import { } from './shared.service'

@Component({
  selector: 'app-comp',
  templateUrl: './shared.component.html',
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // load the abstract module here
  }
}
