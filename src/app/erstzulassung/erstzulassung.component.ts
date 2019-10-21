import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-erstzulassung',
  templateUrl: './erstzulassung.component.html',
  styleUrls: ['./erstzulassung.component.css']
})
export class ErstzulassungComponent implements OnInit {
  constructor(public registrationInfoForm: AppComponent) {}
  currentYear: number = new Date().getFullYear();

  registrationInfoData: FormGroup;
  ngOnInit() {
    this.registrationInfoData = new FormGroup({
      reg: new FormGroup({
        month: new FormControl('', [
          Validators.required,
          Validators.pattern('^(1[0-2]|[1-9])$')
        ]),
        year: new FormControl('', [
          Validators.required,
          Validators.max(this.currentYear),
          Validators.min(this.currentYear - 89),
          Validators.pattern('^[0-9]{4}$')
        ])
      })
    });
    this.registrationInfoForm.form.controls.erstzulassungForm = this.registrationInfoData;
  }

  isInvalidOrTouchedReg() {
    const form = this.registrationInfoData;
    return (
      (form.get('reg.month').invalid && form.get('reg.month').touched) ||
      (form.get('reg.year').invalid && form.get('reg.year').touched)
    );
  }
  hasTemplateErrReg(control: FormControl) {
    const form = this.registrationInfoData;
    return (
      (form.get('reg.month').errors.required ||
        form.get('reg.month').errors.pattern ||
        form.get('reg.year').errors.required ||
        form.get('reg.year').errors.pattern) &&
      !form.get('reg.year').errors.max &&
      !form.get('reg.year').errors.min
    );
  }

  showTheAppComp() {
    console.log(this.registrationInfoForm);
  }
}

// \d

/*
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-erstzulassung',
  templateUrl: './erstzulassung.component.html',
  styleUrls: ['./erstzulassung.component.css']
})
export class ErstzulassungComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      registration: new FormGroup({
        month: new FormControl('', [
          Validators.required,
          Validators.pattern('^(1[0-2]|[1-9])$')
        ]),
        year: new FormControl('', [
          Validators.required,
          Validators.max(this.currentYear),
          Validators.min(this.currentYear - 89),
          Validators.pattern('^[0-9]{4}$')
        ])
      })
    });
  }

  hasTemplateErr(control: FormControl) {
    return true;
    const form = this.form;
    return (
      (form.get('registration.month').errors.required ||
        form.get('registration.month').errors.pattern ||
        form.get('registration.year').errors.required ||
        form.get('registration.year').errors.pattern) &&
      !form.get('registration.year').errors.max &&
      !form.get('registration.year').errors.min
    );
  }

  isInvalidOrTouched() {
    const form = this.form;
    return (
      (form.get('registration.month').invalid &&
        form.get('registration.month').touched) ||
      (form.get('registration.year').invalid &&
        form.get('registration.year').touched)
    );
  }
}

// \d
*/
