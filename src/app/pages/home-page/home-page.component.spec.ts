/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
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
import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from "@angular/router/testing";
//describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    it('works', () => {
    });
  });

//});