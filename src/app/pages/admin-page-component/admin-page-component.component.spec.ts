import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { AdminPageComponentComponent } from './admin-page-component.component';
//describe('AdminPageComponentComponent', () => {
  let component: AdminPageComponentComponent;
  let fixture: ComponentFixture<AdminPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    fixture = TestBed.createComponent(AdminPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  //it('works', () => {
  //});
//});




