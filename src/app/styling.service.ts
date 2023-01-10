import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  constructor() { }
  
  styleforbg = new BehaviorSubject<any>(1);
  public tostyle$ = this.styleforbg.asObservable();



  changeDivColor(val:any){
    this.styleforbg.next(val);
  }
}
