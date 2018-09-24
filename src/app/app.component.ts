import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlFor = (component: string) =>
    `https://github.com/JanMalch/ngx-send-templates/blob/master/src/app/examples/${component}.component.ts`
}
