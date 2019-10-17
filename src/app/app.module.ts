import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormOfPaymentComponent } from './form-of-payment/form-of-payment.component';
import { IconComponent } from './icon/icon.component';
import { KennzeichenartComponent } from './kennzeichenart/kennzeichenart.component';
import { KennzeichenFahrzeugComponent } from './kennzeichen-fahrzeug/kennzeichen-fahrzeug.component';
import { ErstzulassungComponent } from './erstzulassung/erstzulassung.component';
import { ZulassungComponent } from './zulassung/zulassung.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOfPaymentComponent,
    IconComponent,
    KennzeichenartComponent,
    KennzeichenFahrzeugComponent,
    ErstzulassungComponent,
    ZulassungComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
