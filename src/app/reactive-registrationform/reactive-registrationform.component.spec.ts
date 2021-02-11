import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegistrationformComponent } from './reactive-registrationform.component';

describe('ReactiveRegistrationformComponent', () => {
  let component: ReactiveRegistrationformComponent;
  let fixture: ComponentFixture<ReactiveRegistrationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegistrationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
