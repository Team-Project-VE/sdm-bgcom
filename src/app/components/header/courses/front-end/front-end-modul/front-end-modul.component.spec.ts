import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndModulComponent } from './front-end-modul.component';

describe('FrontEndModulComponent', () => {
  let component: FrontEndModulComponent;
  let fixture: ComponentFixture<FrontEndModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
