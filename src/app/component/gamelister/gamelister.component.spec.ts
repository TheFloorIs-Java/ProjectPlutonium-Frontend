import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelisterComponent } from './gamelister.component';

//describe('GamelisterComponent', () => {
  let component: GamelisterComponent;
  let fixture: ComponentFixture<GamelisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamelisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamelisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
 //   expect(component).toBeTruthy();
//  });
//});
