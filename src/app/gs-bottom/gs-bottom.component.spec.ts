import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsBottomComponent } from './gs-bottom.component';

describe('GsBottomComponent', () => {
  let component: GsBottomComponent;
  let fixture: ComponentFixture<GsBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
