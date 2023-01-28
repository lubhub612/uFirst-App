import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyemailpageComponent } from './verifyemailpage.component';

describe('VerifyemailpageComponent', () => {
  let component: VerifyemailpageComponent;
  let fixture: ComponentFixture<VerifyemailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyemailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyemailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
