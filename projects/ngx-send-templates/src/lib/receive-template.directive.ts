import { Directive, ViewContainerRef, OnInit, Input, TemplateRef, OnDestroy } from '@angular/core';
import { SendTemplatesService } from './send-templates.service';
import { OperatorFunction, Subscription } from 'rxjs';

@Directive({
  selector: '[receiveTemplate]' // tslint:disable-line:directive-selector
})
export class ReceiveTemplateDirective implements OnInit, OnDestroy {

  @Input("receiveTemplate") source: any; // tslint:disable-line:no-input-rename
  @Input("receiveTemplateDo") pipe: OperatorFunction<TemplateRef<any>, TemplateRef<any>>; // tslint:disable-line:no-input-rename

  private subscription: Subscription;

  constructor(private vcr: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private templates: SendTemplatesService) { }

  ngOnInit() {
    this.vcr.createEmbeddedView(this.templateRef);
    const stream = this.source === null ? undefined : this.source;

    const observable = !!this.pipe ?
      this.templates.getTemplate(stream).pipe(this.pipe) :
      this.templates.getTemplate(stream);

    this.subscription = observable.subscribe(template => {
      if (!!template) {
        this.vcr.clear();
        this.vcr.createEmbeddedView(template);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.vcr.clear();
  }
}
