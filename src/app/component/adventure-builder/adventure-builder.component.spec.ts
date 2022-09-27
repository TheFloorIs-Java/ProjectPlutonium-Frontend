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
