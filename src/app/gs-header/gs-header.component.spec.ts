import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsHeaderComponent } from './gs-header.component';

describe('GsHeaderComponent', () => {
  let component: GsHeaderComponent;
  let fixture: ComponentFixture<GsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
