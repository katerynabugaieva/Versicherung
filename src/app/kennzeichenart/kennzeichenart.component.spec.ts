import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennzeichenartComponent } from './kennzeichenart.component';

describe('KennzeichenartComponent', () => {
  let component: KennzeichenartComponent;
  let fixture: ComponentFixture<KennzeichenartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennzeichenartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennzeichenartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
