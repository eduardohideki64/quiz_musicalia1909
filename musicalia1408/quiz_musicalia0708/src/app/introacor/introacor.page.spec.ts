import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroacorPage } from './introacor.page';

describe('IntroacorPage', () => {
  let component: IntroacorPage;
  let fixture: ComponentFixture<IntroacorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroacorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
