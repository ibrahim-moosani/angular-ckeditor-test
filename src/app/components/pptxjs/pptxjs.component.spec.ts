import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptxjsComponent } from './pptxjs.component';

describe('PptxjsComponent', () => {
  let component: PptxjsComponent;
  let fixture: ComponentFixture<PptxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PptxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
