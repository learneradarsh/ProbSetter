import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForBussinessComponent } from './for-bussiness.component';

describe('ForBussinessComponent', () => {
  let component: ForBussinessComponent;
  let fixture: ComponentFixture<ForBussinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForBussinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
