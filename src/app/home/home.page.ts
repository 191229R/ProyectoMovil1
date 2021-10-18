import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }


}
