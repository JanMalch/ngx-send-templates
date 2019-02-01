import { Component} from '@angular/core';
import {Subject} from 'rxjs';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-buttons',
  template: `
    <div *sendTemplate="'button' on button$">This was sent by a button click!</div>
    <div *sendTemplate="'buttonMulti' on buttonMulti$">This was received after multiple button clicks!</div>

    <h5>Clicking once</h5>
    <button (click)="sendButton()">Click Once</button>
    <div *receiveTemplate="'button'">Waiting for the button click ...</div>

    <h5>Clicking multiple times</h5>
    <button (click)="sendButtonMulti()">Click multiple times</button>
    <div *receiveTemplate="'buttonMulti' do skipTimes(3)">Waiting for 3 button clicks ...</div>
  `
})
export class ButtonsComponent  {
  button$ = new Subject<void>();
  buttonMulti$ = new Subject<void>();

  skipTimes = (times: number) => source$ => source$.pipe(
    skip(times - 1)
  );

  sendButton() {
    this.button$.next();
  }

  sendButtonMulti() {
    this.buttonMulti$.next();
  }
}
