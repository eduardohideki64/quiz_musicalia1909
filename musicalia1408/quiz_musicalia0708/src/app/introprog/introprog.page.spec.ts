import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroprogPage } from './introprog.page';

describe('IntroprogPage', () => {
  let component: IntroprogPage;
  let fixture: ComponentFixture<IntroprogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroprogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
