import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErstzulassungComponent } from './erstzulassung.component';

describe('ErstzulassungComponent', () => {
  let component: ErstzulassungComponent;
  let fixture: ComponentFixture<ErstzulassungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErstzulassungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErstzulassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
