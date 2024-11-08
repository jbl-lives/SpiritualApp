import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashToolsComponent } from './dash-tools.component';

describe('DashToolsComponent', () => {
  let component: DashToolsComponent;
  let fixture: ComponentFixture<DashToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
