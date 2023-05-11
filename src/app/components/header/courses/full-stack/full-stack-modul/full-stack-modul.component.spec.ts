import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackModulComponent } from './full-stack-modul.component';

describe('FullStackModulComponent', () => {
  let component: FullStackModulComponent;
  let fixture: ComponentFixture<FullStackModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
