import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListComponentComponent } from './invoice-list-component.component';

describe('InvoiceListComponentComponent', () => {
  let component: InvoiceListComponentComponent;
  let fixture: ComponentFixture<InvoiceListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
