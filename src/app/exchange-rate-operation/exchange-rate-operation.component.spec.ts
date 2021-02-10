import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateOperationComponent } from './exchange-rate-operation.component';

describe('ExchangeRateOperationComponent', () => {
  let component: ExchangeRateOperationComponent;
  let fixture: ComponentFixture<ExchangeRateOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
