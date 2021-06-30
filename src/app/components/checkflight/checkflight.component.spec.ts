import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckflightComponent } from './checkflight.component';

describe('CheckflightComponent', () => {
  let component: CheckflightComponent;
  let fixture: ComponentFixture<CheckflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
