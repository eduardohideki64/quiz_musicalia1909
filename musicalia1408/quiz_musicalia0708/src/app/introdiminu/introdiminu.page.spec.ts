import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrodiminuPage } from './introdiminu.page';

describe('IntrodiminuPage', () => {
  let component: IntrodiminuPage;
  let fixture: ComponentFixture<IntrodiminuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrodiminuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
