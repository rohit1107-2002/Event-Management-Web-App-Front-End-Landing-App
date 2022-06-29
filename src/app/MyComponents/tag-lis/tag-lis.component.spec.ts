import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLisComponent } from './tag-lis.component';

describe('TagLisComponent', () => {
  let component: TagLisComponent;
  let fixture: ComponentFixture<TagLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagLisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
