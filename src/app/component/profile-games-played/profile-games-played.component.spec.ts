import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGamesPlayedComponent } from './profile-games-played.component';

describe('ProfileGamesPlayedComponent', () => {
  let component: ProfileGamesPlayedComponent;
  let fixture: ComponentFixture<ProfileGamesPlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGamesPlayedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGamesPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
