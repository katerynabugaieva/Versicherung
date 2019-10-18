import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form-of-payment',
  templateUrl: './form-of-payment.component.html',
  styleUrls: ['./form-of-payment.component.css']
})
export class FormOfPaymentComponent implements OnInit {
  constructor(public finInfoForm: AppComponent) {}

  finInfoData: FormGroup;
  ngOnInit() {
    this.finInfoData = new FormGroup({
      payment: new FormGroup({
        month: new FormControl('')
        //  bBarkauf: new FormControl('barkauf'),
        //  bKredit: new FormControl('kredit'),
        //  bLeasing: new FormControl('leasinf')
      })
    });

    this.finInfoForm.form.controls.finForm = this.finInfoData;
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
