import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignPlansComponent } from './web-design-plans.component';

describe('WebDesignPlansComponent', () => {
  let component: WebDesignPlansComponent;
  let fixture: ComponentFixture<WebDesignPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDesignPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
