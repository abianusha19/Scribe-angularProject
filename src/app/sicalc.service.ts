import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SicalcService {

  constructor() { }
  calcsi(principal,rate,years)
  {
    let val=principal*rate*years;
    return val/100;
  }
}
