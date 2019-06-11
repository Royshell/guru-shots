import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsGalleryComponent } from './gs-gallery.component';

describe('GsGalleryComponent', () => {
  let component: GsGalleryComponent;
  let fixture: ComponentFixture<GsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
