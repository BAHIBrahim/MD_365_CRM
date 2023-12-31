import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsPasswordComponent } from './user-settings-password.component';

describe('UserSettingsPasswordComponent', () => {
  let component: UserSettingsPasswordComponent;
  let fixture: ComponentFixture<UserSettingsPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
