import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoonterComponent } from './foonter.component';

describe('FoonterComponent', () => {
  let component: FoonterComponent;
  let fixture: ComponentFixture<FoonterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoonterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoonterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
