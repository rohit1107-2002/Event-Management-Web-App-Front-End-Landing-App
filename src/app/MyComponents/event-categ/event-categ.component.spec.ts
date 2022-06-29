import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategComponent } from './event-categ.component';

describe('EventCategComponent', () => {
  let component: EventCategComponent;
  let fixture: ComponentFixture<EventCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
