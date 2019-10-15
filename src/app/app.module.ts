import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { FormOfPaymentComponent } from "./form-of-payment/form-of-payment.component";
import { IconComponent } from "./icon/icon.component";
import { KennzeichenartComponent } from './kennzeichenart/kennzeichenart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FormOfPaymentComponent,
    IconComponent,
    KennzeichenartComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
