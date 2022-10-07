import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveproductComponent } from './removeproduct.component';

describe('RemoveproductComponent', () => {
  let component: RemoveproductComponent;
  let fixture: ComponentFixture<RemoveproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
