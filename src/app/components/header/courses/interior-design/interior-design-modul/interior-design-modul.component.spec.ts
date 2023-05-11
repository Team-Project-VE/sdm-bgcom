import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesignModulComponent } from './interior-design-modul.component';

describe('InteriorDesignModulComponent', () => {
  let component: InteriorDesignModulComponent;
  let fixture: ComponentFixture<InteriorDesignModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorDesignModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorDesignModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
