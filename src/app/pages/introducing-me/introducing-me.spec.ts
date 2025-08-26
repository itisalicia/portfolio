import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducingMe } from './introducing-me';

describe('IntroducingMe', () => {
  let component: IntroducingMe;
  let fixture: ComponentFixture<IntroducingMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroducingMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroducingMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
