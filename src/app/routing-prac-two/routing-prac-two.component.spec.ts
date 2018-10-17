import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPracTwoComponent } from './routing-prac-two.component';

describe('RoutingPracTwoComponent', () => {
  let component: RoutingPracTwoComponent;
  let fixture: ComponentFixture<RoutingPracTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPracTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPracTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
