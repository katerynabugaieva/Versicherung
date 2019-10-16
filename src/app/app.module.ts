import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { FormOfPaymentComponent } from "./form-of-payment/form-of-payment.component";
import { IconComponent } from "./icon/icon.component";
import { KennzeichenartComponent } from "./kennzeichenart/kennzeichenart.component";
import { KennzeichenFahrzeugComponent } from "./kennzeichen-fahrzeug/kennzeichen-fahrzeug.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FormOfPaymentComponent,
    IconComponent,
    KennzeichenartComponent,
    KennzeichenFahrzeugComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
