import { Component} from '@angular/core';
import {interval, timer} from 'rxjs';
import {startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html'
})
export class ObservablesComponent {

  delayBy10s = timer(10000);

  times = 0;
  everySec = interval(1000).pipe(
    startWith(0),
    tap(val => this.times = val + 1)
  );

}
