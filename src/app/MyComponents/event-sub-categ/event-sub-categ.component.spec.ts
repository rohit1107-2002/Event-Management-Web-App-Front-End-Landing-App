import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubCategComponent } from './event-sub-categ.component';

describe('EventSubCategComponent', () => {
  let component: EventSubCategComponent;
  let fixture: ComponentFixture<EventSubCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSubCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSubCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
