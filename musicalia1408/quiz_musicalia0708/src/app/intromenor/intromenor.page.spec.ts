import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntromenorPage } from './intromenor.page';

describe('IntromenorPage', () => {
  let component: IntromenorPage;
  let fixture: ComponentFixture<IntromenorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntromenorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
