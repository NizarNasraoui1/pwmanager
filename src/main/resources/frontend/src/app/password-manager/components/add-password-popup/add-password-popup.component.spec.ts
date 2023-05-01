import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordPopupComponent } from './add-password-popup.component';

describe('AddPasswordPopupComponent', () => {
  let component: AddPasswordPopupComponent;
  let fixture: ComponentFixture<AddPasswordPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPasswordPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPasswordPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
