import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennzeichenFahrzeugComponent } from './kennzeichen-fahrzeug.component';

describe('KennzeichenFahrzeugComponent', () => {
  let component: KennzeichenFahrzeugComponent;
  let fixture: ComponentFixture<KennzeichenFahrzeugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennzeichenFahrzeugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennzeichenFahrzeugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
