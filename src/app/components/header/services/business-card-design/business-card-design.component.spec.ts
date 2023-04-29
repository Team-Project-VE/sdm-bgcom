import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardDesignComponent } from './business-card-design.component';

describe('BusinessCardDesignComponent', () => {
  let component: BusinessCardDesignComponent;
  let fixture: ComponentFixture<BusinessCardDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCardDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCardDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
