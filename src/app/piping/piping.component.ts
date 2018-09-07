import {Component} from '@angular/core';
import {delay, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html'
})
export class PipingComponent {

  delayBy = (by: number) => (source$) => source$.pipe(
    delay(by)
  )

  log = source$ => source$.pipe(
    tap(ref => console.log("Piping on the receiving end", ref))
  )

}
