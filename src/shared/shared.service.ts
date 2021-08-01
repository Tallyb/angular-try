import { Injectable } from '@angular/core';

@Injectable()
export abstract class ServiceService {

  constructor() { }

  // Put here what it must return in real
  abstract lazyLoad(): void;
}
