import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodesPortComponent } from './logodes-port.component';

describe('LogodesPortComponent', () => {
  let component: LogodesPortComponent;
  let fixture: ComponentFixture<LogodesPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogodesPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogodesPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
