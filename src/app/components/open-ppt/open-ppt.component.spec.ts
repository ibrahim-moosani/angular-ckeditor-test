import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPptComponent } from './open-ppt.component';

describe('OpenPptComponent', () => {
  let component: OpenPptComponent;
  let fixture: ComponentFixture<OpenPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
