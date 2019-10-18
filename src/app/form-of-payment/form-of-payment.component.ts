import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ControlValueAccessor } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form-of-payment',
  templateUrl: './form-of-payment.component.html',
  styleUrls: ['./form-of-payment.component.css']
})
// , ControlValueAccessor
export class FormOfPaymentComponent implements OnInit {
  constructor(public finInfoForm: AppComponent) {}

  finInfoData: FormGroup;
  ngOnInit() {
    this.finInfoData = new FormGroup({
      payment: new FormGroup({
        bBarkauf: new FormControl('barkauf'),
        bKredit: new FormControl('kredit'),
        bLeasing: new FormControl('leasing')
      })
    });
    this.finInfoForm.form.controls.finForm = this.finInfoData;
  }
  /*
  writeValue(value: any) {
    // any inputs in a form
  }
  registerOnChange(fn: (value: any) => void) {
    // TO do
    // call if forma has been updated by user
  }
  registerOnTouched(fn: () => void) {
    //  should component was updated
  }

  */

  showTheAppComp() {
    console.log(this.finInfoForm);
  }

  onFormPaymentClick($event) {
    const clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === 'BUTTON') {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(
        '.btn-primary'
      );
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('btn-primary');
      }

      // tslint:disable-next-line:quotemark
      clickedElement.className += ' btn-primary';
    }
  }
}
