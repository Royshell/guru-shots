import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsMainComponent } from './gs-main.component';

describe('GsMainComponent', () => {
  let component: GsMainComponent;
  let fixture: ComponentFixture<GsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
