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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
