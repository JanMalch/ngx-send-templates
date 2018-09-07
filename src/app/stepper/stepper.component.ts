import { Component} from '@angular/core';
import {skip} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent  {

  stepper$ = new BehaviorSubject<void>(undefined);

  onStep = (step: number) => (source$) => source$.pipe(
    skip(step)
  )

  nextStep() {
    this.stepper$.next(undefined);
  }
}
