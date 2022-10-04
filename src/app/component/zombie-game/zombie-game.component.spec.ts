/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZombieGameComponent } from './zombie-game.component';

describe('ZombieGameComponent', () => {
  let component: ZombieGameComponent;
  let fixture: ComponentFixture<ZombieGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZombieGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZombieGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });


});
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ZombieGameComponent } from './zombie-game.component';
describe('ZombieGameComponent', () => {
  let component: ZombieGameComponent;
  let fixture: ComponentFixture<ZombieGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(ZombieGameComponent);
    component = fixture.componentInstance;
;
  });
  it('works', () => {
  });
});