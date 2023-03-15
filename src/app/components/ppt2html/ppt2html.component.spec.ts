import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ppt2htmlComponent } from './ppt2html.component';

describe('Ppt2htmlComponent', () => {
  let component: Ppt2htmlComponent;
  let fixture: ComponentFixture<Ppt2htmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ppt2htmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ppt2htmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
