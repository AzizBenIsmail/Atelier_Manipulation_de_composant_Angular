import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponentComponent } from './list-user-component.component';

describe('ListUserComponentComponent', () => {
  let component: ListUserComponentComponent;
  let fixture: ComponentFixture<ListUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
