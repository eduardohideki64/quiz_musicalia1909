import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrotriaPage } from './introtria.page';

describe('IntrotriaPage', () => {
  let component: IntrotriaPage;
  let fixture: ComponentFixture<IntrotriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrotriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
