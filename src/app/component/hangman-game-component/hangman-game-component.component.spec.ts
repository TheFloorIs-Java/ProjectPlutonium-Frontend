import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGameComponentComponent } from './hangman-game-component.component';

//describe('HangmanGameComponentComponent', () => {
  let component: HangmanGameComponentComponent;
  let fixture: ComponentFixture<HangmanGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanGameComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });


//});
