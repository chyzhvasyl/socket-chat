import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpanelComponent } from './backpanel.component';

describe('BackpanelComponent', () => {
  let component: BackpanelComponent;
  let fixture: ComponentFixture<BackpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
