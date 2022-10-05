/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureBuilderComponent } from './adventure-builder.component';

describe('AdventureBuilderComponent', () => {
  let component: AdventureBuilderComponent;
  let fixture: ComponentFixture<AdventureBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureBuilderComponent);
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
import { AdventureBuilderComponent } from './adventure-builder.component';
//describe('AdventureBuilderComponent', () => {
  let component: AdventureBuilderComponent;
  let fixture: ComponentFixture<AdventureBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(AdventureBuilderComponent);
    component = fixture.componentInstance;
    it('works', () => {
    });
  });
  
//});
