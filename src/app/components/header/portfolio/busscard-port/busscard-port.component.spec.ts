import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusscardPortComponent } from './busscard-port.component';

describe('BusscardPortComponent', () => {
  let component: BusscardPortComponent;
  let fixture: ComponentFixture<BusscardPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusscardPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusscardPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
