import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSystemComponent } from './section-system.component';

describe('SectionSystemComponent', () => {
  let component: SectionSystemComponent;
  let fixture: ComponentFixture<SectionSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
