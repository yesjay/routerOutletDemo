import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPracThreeComponent } from './routing-prac-three.component';

describe('RoutingPracThreeComponent', () => {
  let component: RoutingPracThreeComponent;
  let fixture: ComponentFixture<RoutingPracThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPracThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPracThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
