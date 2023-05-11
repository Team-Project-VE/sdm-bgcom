import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPlansComponent } from './logo-plans.component';

describe('LogoPlansComponent', () => {
  let component: LogoPlansComponent;
  let fixture: ComponentFixture<LogoPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
