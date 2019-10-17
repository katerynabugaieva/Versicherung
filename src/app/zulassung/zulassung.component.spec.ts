import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZulassungComponent } from './zulassung.component';

describe('ZulassungComponent', () => {
  let component: ZulassungComponent;
  let fixture: ComponentFixture<ZulassungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZulassungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZulassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
