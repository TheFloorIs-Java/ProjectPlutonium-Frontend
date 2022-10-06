import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGamesCreatedComponent } from './profile-games-created.component';


describe('ProfileGamesCreatedComponent', () => {
  let component: ProfileGamesCreatedComponent;
  let fixture: ComponentFixture<ProfileGamesCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGamesCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGamesCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

      xit('should create', () => {
        //test for undefined 
      }
  );
})})
