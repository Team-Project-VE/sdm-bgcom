import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSupportPlansComponent } from './web-support-plans.component';

describe('WebSupportPlansComponent', () => {
  let component: WebSupportPlansComponent;
  let fixture: ComponentFixture<WebSupportPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSupportPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSupportPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
