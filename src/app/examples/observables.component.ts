import { Component} from '@angular/core';
import {interval, timer} from 'rxjs';
import {startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  template: `
    <div *sendTemplate="'delay10s' on after10s">This was delayed by 10s</div>
    <div *sendTemplate="'timer' on everySec">This happens every second. This is the {{ times }}th time.</div>

    <h5>Delay sending by a few seconds</h5>
    <div *receiveTemplate="'delay10s'">Content will appear in 10s</div>

    <h5>Repeatedly send a template</h5>
    <div *receiveTemplate="'timer'"></div>
  `
})
export class ObservablesComponent {
  after10s = timer(10000);

  times = 0;
  everySec = interval(1000).pipe(
    startWith(0),
    tap(val => this.times = val + 1)
  );
}
