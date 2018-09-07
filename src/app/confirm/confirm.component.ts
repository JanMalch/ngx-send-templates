import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {

  button$ = new Subject<void>();

  confirmTemplate = (source$) => source$.pipe(
    map(val => confirm("Do you really want to show this?") ? val : undefined)
  )

}
