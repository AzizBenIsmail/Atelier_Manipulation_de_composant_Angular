import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInvoiceComponentComponent } from './main-invoice-component.component';

describe('MainInvoiceComponentComponent', () => {
  let component: MainInvoiceComponentComponent;
  let fixture: ComponentFixture<MainInvoiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInvoiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
