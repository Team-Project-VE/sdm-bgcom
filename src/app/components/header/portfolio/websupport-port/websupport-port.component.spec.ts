import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsupportPortComponent } from './websupport-port.component';

describe('WebsupportPortComponent', () => {
  let component: WebsupportPortComponent;
  let fixture: ComponentFixture<WebsupportPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsupportPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsupportPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
