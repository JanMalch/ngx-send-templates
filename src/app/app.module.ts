import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxSendTemplatesModule} from 'ngx-send-templates';
import { BasicsComponent } from './basics/basics.component';
import { ObservablesComponent } from './observables/observables.component';
import { PipingComponent } from './piping/piping.component';
import { StepperComponent } from './stepper/stepper.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LateInitComponent } from './late-init/late-init.component';
import { ConfirmComponent } from './confirm/confirm.component';

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
export class AppModule { }
