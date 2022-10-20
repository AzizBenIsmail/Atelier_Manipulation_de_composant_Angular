import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop7Component } from './workshop7.component';

describe('Workshop7Component', () => {
  let component: Workshop7Component;
  let fixture: ComponentFixture<Workshop7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workshop7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workshop7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
