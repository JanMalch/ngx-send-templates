import { Component} from '@angular/core';
import {skip} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-stepper',
  template: `
    <h3 *sendTemplate="'stepper'; sendOn: stepper$; pipe: onStep(1)">Step 1</h3>
    <h3 *sendTemplate="'stepper'; sendOn: stepper$; pipe: onStep(2)">Step 2</h3>
    <h3 *sendTemplate="'stepper'; sendOn: stepper$; pipe: onStep(3)">Step 3</h3>

    <h3 *receiveTemplate="'stepper'">Click the button start!</h3>
    <button (click)="nextStep()">Next Step</button>
  `
})
export class StepperComponent  {

  stepper$ = new BehaviorSubject<void>(undefined);

  onStep = (step: number) => (source$) => source$.pipe(
    skip(step)
  );

  nextStep() {
    this.stepper$.next(undefined);
  }
}
