import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersPageComponent } from './leaders-page.component';

describe('LeadersPageComponent', () => {
  let component: LeadersPageComponent;
  let fixture: ComponentFixture<LeadersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
