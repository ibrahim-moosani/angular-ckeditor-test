import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPptIframeComponent } from './test-ppt-iframe.component';

describe('TestPptIframeComponent', () => {
  let component: TestPptIframeComponent;
  let fixture: ComponentFixture<TestPptIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPptIframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPptIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
