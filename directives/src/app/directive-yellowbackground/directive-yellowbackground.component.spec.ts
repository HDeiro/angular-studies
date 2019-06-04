import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveYellowbackgroundComponent } from './directive-yellowbackground.component';

describe('DirectiveYellowbackgroundComponent', () => {
  let component: DirectiveYellowbackgroundComponent;
  let fixture: ComponentFixture<DirectiveYellowbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveYellowbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveYellowbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
