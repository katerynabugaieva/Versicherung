import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormOfPaymentComponent } from './form-of-payment/form-of-payment.component';
import { IconComponent } from './components/icon/icon.component';
import { ErstzulassungComponent } from './erstzulassung/erstzulassung.component';

/*
import { KennzeichenartComponent } from './components/kennzeichenart/kennzeichenart.component';
import { KennzeichenFahrzeugComponent } from './components/kennzeichen-fahrzeug/kennzeichen-fahrzeug.component';
import { ZulassungComponent } from './components/zulassung/zulassung.component';
*/
// dinamic build forms
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

@NgModule({
  declarations: [
    AppComponent,
    FormOfPaymentComponent,
    IconComponent,
    ErstzulassungComponent

    /*
    KennzeichenartComponent,
    KennzeichenFahrzeugComponent,
    ZulassungComponent
    */
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
