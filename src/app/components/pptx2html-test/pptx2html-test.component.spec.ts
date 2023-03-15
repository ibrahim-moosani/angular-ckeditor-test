import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pptx2htmlTestComponent } from './pptx2html-test.component';

describe('Pptx2htmlTestComponent', () => {
  let component: Pptx2htmlTestComponent;
  let fixture: ComponentFixture<Pptx2htmlTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pptx2htmlTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pptx2htmlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
