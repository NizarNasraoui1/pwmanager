import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPasswordsComponent } from './view-passwords.component';

describe('ViewPasswordsComponent', () => {
  let component: ViewPasswordsComponent;
  let fixture: ComponentFixture<ViewPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPasswordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
