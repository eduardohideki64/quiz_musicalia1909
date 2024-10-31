import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrotrimenorPage } from './introtrimenor.page';

describe('IntrotrimenorPage', () => {
  let component: IntrotrimenorPage;
  let fixture: ComponentFixture<IntrotrimenorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrotrimenorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
