import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersComponentComponent } from './leaders-component.component';

describe('LeadersComponentComponent', () => {
  let component: LeadersComponentComponent;
  let fixture: ComponentFixture<LeadersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
