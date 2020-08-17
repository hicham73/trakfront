import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeRouteComponent } from './vehicule-route.component';

describe('VehiculeRouteComponent', () => {
  let component: VehiculeRouteComponent;
  let fixture: ComponentFixture<VehiculeRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
