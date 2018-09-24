import {Component} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-basics',
  template: `
    <div *sendTemplate>default stream - initial value</div>
    <code *sendTemplate="'code'">code-tag sent by string identifier</code>
    <div *sendTemplate="appComponent">funky stuff by Function ref of AppComponent</div>

    <h5>Default stream</h5>
    <ng-container *receiveTemplate></ng-container>
    <h5>stream specified by string</h5>
    <ng-container *receiveTemplate="'code'"></ng-container>
    <h5>stream specified by function</h5>
    <ng-container *receiveTemplate="appComponent"></ng-container>
  `
})
export class BasicsComponent  {
  appComponent = AppComponent;
}
