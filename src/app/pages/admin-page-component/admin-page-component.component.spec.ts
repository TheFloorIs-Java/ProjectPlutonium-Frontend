import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponentComponent } from './admin-page-component.component';
import  { async } from "@angular/core/testing";

describe('AdminPageComponentComponent', () => {
  let component: AdminPageComponentComponent;
  let fixture: ComponentFixture<AdminPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
  it('should create', ()=> {
    expect (component).toBeTruthy();
  });
  
  });



});
