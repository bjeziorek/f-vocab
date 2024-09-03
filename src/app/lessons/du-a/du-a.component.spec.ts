import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAComponent } from './du-a.component';

describe('DuAComponent', () => {
  let component: DuAComponent;
  let fixture: ComponentFixture<DuAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuAComponent]
    });
    fixture = TestBed.createComponent(DuAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
