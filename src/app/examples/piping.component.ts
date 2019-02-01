import {Component} from '@angular/core';
import {delay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-piping',
  template: `
    <div *sendTemplate="'log template'">Check your console!</div>

    <h5>Delay template by a custom amount</h5>
    <div *receiveTemplate="'default' do delayBy(30000)">Default stream will appear after 30s</div>
    <!-- Use undefined to select the default stream -->

    <h5>Have side effects while receiving a template</h5>
    <div *receiveTemplate="'log template' do log"></div>
  `
})
export class PipingComponent {

  delayBy = (by: number) => (source$) => source$.pipe(
    delay(by)
  );

  log = source$ => source$.pipe(
    tap(ref => console.log("Piping on the receiving end", ref))
  );

}
