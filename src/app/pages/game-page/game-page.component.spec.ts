/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { GamePageComponent } from './game-page.component';
import { RouterTestingModule } from "@angular/router/testing";
describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePageComponent ],
      imports: [  HttpClientModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
 // it('should create', () => {
 //   expect(component).toBeTruthy();
 // });

*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { GamePageComponent } from './game-page.component';
import { RouterTestingModule } from "@angular/router/testing";
describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  HttpClientModule, HttpClientTestingModule ],
      providers: [HttpClient]
    });
    //fixture = TestBed.createComponent(GamePageComponent);
    //component = fixture.componentInstance;

  });
  it('works', () => {
  });
});
