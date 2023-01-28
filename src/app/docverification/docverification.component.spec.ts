import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocverificationComponent } from './docverification.component';

describe('DocverificationComponent', () => {
  let component: DocverificationComponent;
  let fixture: ComponentFixture<DocverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
