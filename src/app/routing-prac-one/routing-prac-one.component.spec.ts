import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPracOneComponent } from './routing-prac-one.component';

describe('RoutingPracOneComponent', () => {
  let component: RoutingPracOneComponent;
  let fixture: ComponentFixture<RoutingPracOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPracOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPracOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
