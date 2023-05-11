import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndModulComponent } from './back-end-modul.component';

describe('BackEndModulComponent', () => {
  let component: BackEndModulComponent;
  let fixture: ComponentFixture<BackEndModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEndModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
