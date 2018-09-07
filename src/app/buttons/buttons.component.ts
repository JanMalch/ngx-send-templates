import { Component} from '@angular/core';
import {Subject} from 'rxjs';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent  {


  button$ = new Subject<void>();
  buttonMulti$ = new Subject<void>();

  skipTimes = (times: number) => source$ => source$.pipe(
    skip(times - 1)
  )

  sendButton() {
    this.button$.next();
  }

  sendButtonMulti() {
    this.buttonMulti$.next();
  }

}
