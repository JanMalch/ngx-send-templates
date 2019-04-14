import {Observable, OperatorFunction, Subscription} from 'rxjs';
import {SendTemplatesService} from './send-templates.service';
import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';

@Directive({
  selector: '[sendTemplate]' // tslint:disable-line:directive-selector
})
export class SendTemplatesDirective implements OnInit, OnDestroy {

  @Input("sendTemplate") destination: any; // tslint:disable-line:no-input-rename
  @Input("sendTemplateOn") sendOn: Observable<any>; // tslint:disable-line:no-input-rename
  @Input("sendTemplateDo") pipe: OperatorFunction<any, any>; // tslint:disable-line:no-input-rename

  private subscription: Subscription;

  constructor(private templateRef: TemplateRef<HTMLElement>, private service: SendTemplatesService) {
  }

  ngOnInit() {
    if (!this.sendOn) {
      this.service.next(this.templateRef, this.destination);
    } else {
      const observable = !!this.pipe ?
        this.sendOn.pipe(this.pipe) :
        this.sendOn;

      this.subscription = observable.subscribe(() => this.service.next(this.templateRef, this.destination));
    }
  }

  ngOnDestroy() {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
