import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-confirm',
  template: `
    <div *sendTemplate="'confirm'; sendOn: button$">Thanks for showing me!</div>
    <h5>Use mapping pipe to manually confirm the template</h5>
    <button (click)="button$.next()">Send Template</button>
    <div *receiveTemplate="'confirm'; pipe: confirmTemplate">Placeholder ...</div>
  `
})
export class ConfirmComponent {

  button$ = new Subject<void>();

  confirmTemplate = (source$) => source$.pipe(
    map(val => confirm('Do you really want to show this?') ? val : undefined)
  );

}
