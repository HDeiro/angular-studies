import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgcontentComponent } from './directive-ngcontent.component';

describe('DirectiveNgcontentComponent', () => {
  let component: DirectiveNgcontentComponent;
  let fixture: ComponentFixture<DirectiveNgcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveNgcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
