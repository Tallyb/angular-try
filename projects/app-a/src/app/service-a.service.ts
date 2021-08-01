import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService {

  constructor() { 
    
  }

  lazyLoad() {
    import('@src/module-a/module-a.module');
  }
}
