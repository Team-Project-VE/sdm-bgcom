import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardsPlansComponent } from './business-cards-plans.component';

describe('BusinessCardsPlansComponent', () => {
  let component: BusinessCardsPlansComponent;
  let fixture: ComponentFixture<BusinessCardsPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCardsPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCardsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
