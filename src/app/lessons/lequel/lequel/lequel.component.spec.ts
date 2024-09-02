import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LequelComponent } from './lequel.component';

describe('LequelComponent', () => {
  let component: LequelComponent;
  let fixture: ComponentFixture<LequelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LequelComponent]
    });
    fixture = TestBed.createComponent(LequelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
