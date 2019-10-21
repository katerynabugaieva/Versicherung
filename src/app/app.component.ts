import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public globalString = 'I AM PUBLIC!';
  public form: FormGroup;

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true
    },

    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [{ key: 'f', label: 'Fishing' }, { key: 'c', label: 'Cooking' }]
    }
  ];
  constructor() {
    this.form = new FormGroup({
      //  financeForm: new FormControl('app component'),
      finForm: new FormGroup({}),
      erstzulassungForm: new FormGroup({}),
      fields: new FormControl(JSON.stringify(this.fields)),
      myExtraForm: new FormGroup({})
    });
    console.log(this.form);
  }

  getFields() {
    return this.fields;
  }
}
