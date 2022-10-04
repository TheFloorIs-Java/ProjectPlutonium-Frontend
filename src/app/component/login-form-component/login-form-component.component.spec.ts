/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponentComponent } from './login-form-component.component';

describe('LoginFormComponentComponent', () => {
  let component: LoginFormComponentComponent;
  let fixture: ComponentFixture<LoginFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponentComponent);
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
import { LoginFormComponentComponent } from './login-form-component.component';
//describe('LoginFormComponentComponent', () => {
  let component: LoginFormComponentComponent;
  let fixture: ComponentFixture<LoginFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(LoginFormComponentComponent);
    component = fixture.componentInstance;
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
//});