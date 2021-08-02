import { Injectable } from '@angular/core';
import { ServiceService } from '@src/shared';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService implements ServiceService {

  constructor() {

  }

  lazyLoad() {
    console.log(`import('@src/module-a/module-a.module')`);
    // import('@src/module-a/module-a.module');
  }
}
