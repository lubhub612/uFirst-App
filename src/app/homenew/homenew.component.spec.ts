import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenewComponent } from './homenew.component';

describe('HomenewComponent', () => {
  let component: HomenewComponent;
  let fixture: ComponentFixture<HomenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomenewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
