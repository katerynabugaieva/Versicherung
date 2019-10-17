import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
          Validators.pattern('[0-9]{4}$'),
          this.consoleMe.bind(this)
        ])
      })
    });
  }

  consoleMe(control: FormControl) {
    console.log(control);
  }
}

// \d
