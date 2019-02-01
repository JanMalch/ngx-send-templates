import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxSendTemplatesModule} from 'ngx-send-templates';
import {BasicsComponent} from './examples/basics.component';
import {ObservablesComponent} from './examples/observables.component';
import {PipingComponent} from './examples/piping.component';
import {StepperComponent} from './examples/stepper.component';
import {ButtonsComponent} from './examples/buttons.component';
import {LateInitComponent} from './examples/late-init.component';
import {ConfirmComponent} from './examples/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    ObservablesComponent,
    PipingComponent,
    StepperComponent,
    ButtonsComponent,
    LateInitComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    NgxSendTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
