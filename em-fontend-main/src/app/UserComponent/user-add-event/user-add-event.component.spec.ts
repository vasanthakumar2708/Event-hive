import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddEventComponent } from './user-add-event.component';

describe('UserAddEventComponent', () => {
  let component: UserAddEventComponent;
  let fixture: ComponentFixture<UserAddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
