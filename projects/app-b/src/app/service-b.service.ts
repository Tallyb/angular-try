import { ServiceService } from '@src/shared';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService implements ServiceService {

  constructor() { }
  lazyLoad() {
    console.log(`import('@src/module-b/module-b.module')`);
  }
}
