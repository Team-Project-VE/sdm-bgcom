import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevPortComponent } from './webdev-port.component';

describe('WebdevPortComponent', () => {
  let component: WebdevPortComponent;
  let fixture: ComponentFixture<WebdevPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdevPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
