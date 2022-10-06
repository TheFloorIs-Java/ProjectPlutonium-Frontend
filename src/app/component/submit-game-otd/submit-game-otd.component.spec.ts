import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGameOTDComponent } from './submit-game-otd.component';

//describe('SubmitGameOTDComponent', () => {
  let component: SubmitGameOTDComponent;
  let fixture: ComponentFixture<SubmitGameOTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitGameOTDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitGameOTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
 //   expect(component).toBeTruthy();
 // });
//});



