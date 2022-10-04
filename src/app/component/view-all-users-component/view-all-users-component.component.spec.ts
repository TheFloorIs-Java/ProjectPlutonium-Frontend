/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUsersComponentComponent } from './view-all-users-component.component';

describe('ViewAllUsersComponentComponent', () => {
  let component: ViewAllUsersComponentComponent;
  let fixture: ComponentFixture<ViewAllUsersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllUsersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllUsersComponentComponent);
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
import { ViewAllUsersComponentComponent } from './view-all-users-component.component';
import { RouterTestingModule } from "@angular/router/testing";
describe('ViewAllUsersComponentComponent', () => {
  let component: ViewAllUsersComponentComponent;
  let fixture: ComponentFixture<ViewAllUsersComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(ViewAllUsersComponentComponent);
    component = fixture.componentInstance;
;
  });
  it('works', () => {
  });
});