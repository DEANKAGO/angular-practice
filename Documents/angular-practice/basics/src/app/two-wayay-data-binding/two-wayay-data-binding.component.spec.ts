import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayayDataBindingComponent } from './two-wayay-data-binding.component';

describe('TwoWayayDataBindingComponent', () => {
  let component: TwoWayayDataBindingComponent;
  let fixture: ComponentFixture<TwoWayayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayayDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
