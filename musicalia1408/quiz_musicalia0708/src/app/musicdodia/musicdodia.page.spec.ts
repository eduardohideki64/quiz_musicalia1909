import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicdodiaPage } from './musicdodia.page';

describe('MusicdodiaPage', () => {
  let component: MusicdodiaPage;
  let fixture: ComponentFixture<MusicdodiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicdodiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
