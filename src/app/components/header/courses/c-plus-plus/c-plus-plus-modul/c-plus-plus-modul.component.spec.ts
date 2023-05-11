import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPlusPlusModulComponent } from './c-plus-plus-modul.component';

describe('CPlusPlusModulComponent', () => {
  let component: CPlusPlusModulComponent;
  let fixture: ComponentFixture<CPlusPlusModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPlusPlusModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPlusPlusModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
