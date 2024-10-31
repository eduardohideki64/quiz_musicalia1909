import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrotetraPage } from './introtetra.page';

describe('IntrotetraPage', () => {
  let component: IntrotetraPage;
  let fixture: ComponentFixture<IntrotetraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrotetraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
