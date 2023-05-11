import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonModulComponent } from './python-modul.component';

describe('PythonModulComponent', () => {
  let component: PythonModulComponent;
  let fixture: ComponentFixture<PythonModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
