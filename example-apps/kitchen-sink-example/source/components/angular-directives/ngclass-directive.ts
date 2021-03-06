import {Component} from 'angular2/core';

@Component({
   selector: 'ngclass-directive',
   inputs: ['isDisabled'],
  template: `
     <div class="button" [ngClass]="{active: isOn, disabled: isDisabled}" 
         (click)="toggle(!isOn)">
         Click me!
     </div>`,
  styles: [`
    .button {
      width: 120px;
      border: medium solid black;
    }
  
    .active {
      background-color: red;
    }
    
    .disabled {
      color: gray;
      border: medium solid gray;
    }
  `]
})
export default class NgClassDirective {
  isOn = false;
  isDisabled = false;

  toggle(newState) {
    if (!this.isDisabled) {
      this.isOn = newState;
    }
  }
}
