import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutUserComponentComponent } from './put-user-component.component';

//describe('PutUserComponentComponent', () => {
  let component: PutUserComponentComponent;
  let fixture: ComponentFixture<PutUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });


//});
