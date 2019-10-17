import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zulassung',
  templateUrl: './zulassung.component.html',
  styleUrls: ['./zulassung.component.css']
})
export class ZulassungComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  formZulassung: FormGroup;

  ngOnInit() {
    this.formZulassung = new FormGroup({
      registrationZulassung: new FormGroup({
        monthZulassung: new FormControl('', [
          Validators.required,
          Validators.pattern('^(1[0-2]|[1-9])$')
        ]),
        yearZulassung: new FormControl('', [
          Validators.required,
          Validators.max(this.currentYear),
          Validators.min(this.currentYear - 89),
          Validators.pattern('[0-9]{4}$'),
        //  this.consoleMe.bind(this)
        ])
      })
    });
  }

  consoleMe(control: FormControl) {
    console.log(control);
  }
}

// \d
