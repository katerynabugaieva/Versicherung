import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: './checkbox.html'
})
export class CheckBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }
}

