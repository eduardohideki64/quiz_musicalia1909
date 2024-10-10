import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntronotasPage } from './intronotas.page';

describe('IntronotasPage', () => {
  let component: IntronotasPage;
  let fixture: ComponentFixture<IntronotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntronotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
