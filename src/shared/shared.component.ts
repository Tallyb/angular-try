import { Component, OnInit } from '@angular/core';
import { ServiceService } from './shared.service'

@Component({
  selector: 'app-comp',
  templateUrl: './shared.component.html',
})
export class SharedComponent implements OnInit {

  constructor(private readonly service: ServiceService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.service.lazyLoad();
  }
}
