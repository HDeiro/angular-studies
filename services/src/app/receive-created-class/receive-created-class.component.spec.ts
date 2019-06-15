import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCreatedClassComponent } from './receive-created-class.component';

describe('ReceiveCreatedClassComponent', () => {
  let component: ReceiveCreatedClassComponent;
  let fixture: ComponentFixture<ReceiveCreatedClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveCreatedClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveCreatedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
