import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor() { }
  lazyLoad() {
    import(`@src/module-b/module-b.module`);
  }
}
