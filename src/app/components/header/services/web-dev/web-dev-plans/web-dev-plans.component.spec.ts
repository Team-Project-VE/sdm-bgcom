import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevPlansComponent } from './web-dev-plans.component';

describe('WebDevPlansComponent', () => {
  let component: WebDevPlansComponent;
  let fixture: ComponentFixture<WebDevPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
