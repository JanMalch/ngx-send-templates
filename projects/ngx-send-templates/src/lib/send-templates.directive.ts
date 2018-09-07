import {Observable, OperatorFunction, Subscription} from 'rxjs';
import {SendTemplatesService} from './send-templates.service';
import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';

@Directive({
  selector: '[sendTemplate]' // tslint:disable-line:directive-selector
})
export class SendTemplatesDirective implements OnInit, OnDestroy {

  @Input() sendTemplate: any;
  @Input("sendTemplateSendOn") sendOn: Observable<any>; // tslint:disable-line:no-input-rename
  @Input("sendTemplatePipe") pipe: OperatorFunction<any, any>; // tslint:disable-line:no-input-rename

  private subscription: Subscription;

  constructor(private templateRef: TemplateRef<HTMLElement>, private service: SendTemplatesService) {
  }

  ngOnInit() {
    if (!this.sendOn) {
      this.service.next(this.templateRef, this.sendTemplate);
    } else {
      const observable = !!this.pipe ?
        this.sendOn.pipe(this.pipe) :
        this.sendOn;

      this.subscription = observable.subscribe(() => this.service.next(this.templateRef, this.sendTemplate));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
