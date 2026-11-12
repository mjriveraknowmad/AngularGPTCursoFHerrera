import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingLoader } from './typing-loader';

describe('TypingLoader', () => {
  let component: TypingLoader;
  let fixture: ComponentFixture<TypingLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(TypingLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
