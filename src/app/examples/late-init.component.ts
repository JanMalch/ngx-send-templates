import {Component} from '@angular/core';

@Component({
  selector: 'app-late-init',
  template: `
    <h5>Late init</h5>
    <button (click)="late = !late">Click me to toggle *ngIf</button>
    <ng-container *ngIf="late">
      <ng-container *receiveTemplate></ng-container>
    </ng-container>
  `
})
export class LateInitComponent {
  late = false;
}
