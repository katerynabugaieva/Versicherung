import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public globalString = 'I AM PUBLIC!';
  public form: FormGroup;
  constructor() {}
  ngOnInit() {
    this.form = new FormGroup({
      //  financeForm: new FormControl('app component'),
      finForm: new FormGroup({}),
      erstzulassungForm: new FormGroup({})
    });
    console.log(this.form);
  }
}
