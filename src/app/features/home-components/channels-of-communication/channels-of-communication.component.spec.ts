import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsOfCommunicationComponent } from './channels-of-communication.component';

describe('ChannelsOfCommunicationComponent', () => {
  let component: ChannelsOfCommunicationComponent;
  let fixture: ComponentFixture<ChannelsOfCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChannelsOfCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelsOfCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
