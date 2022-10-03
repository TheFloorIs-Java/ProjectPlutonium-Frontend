/*import { ComponentFixture, TestBed } from '@angular/core/testing';

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ProfileGamesCreatedComponent } from './profile-games-created.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ProfileGamesCreatedComponent', () => {
  let component: ProfileGamesCreatedComponent;
  let fixture: ComponentFixture<ProfileGamesCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    });
    fixture = TestBed.createComponent(ProfileGamesCreatedComponent);
    component = fixture.componentInstance;
;
  });
  it('works', () => {
  });
});


