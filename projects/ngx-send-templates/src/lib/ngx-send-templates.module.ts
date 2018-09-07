import {NgModule} from '@angular/core';
import {SendTemplatesDirective} from './send-templates.directive';
import {ReceiveTemplateDirective} from './receive-template.directive';

@NgModule({
  imports: [],
  declarations: [SendTemplatesDirective, ReceiveTemplateDirective],
  exports: [SendTemplatesDirective, ReceiveTemplateDirective]
})
export class NgxSendTemplatesModule {
}
