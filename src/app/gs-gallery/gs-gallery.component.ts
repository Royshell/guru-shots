import { Component, Input, ElementRef, SimpleChanges, Renderer2, OnChanges } from '@angular/core';

@Component({
  selector: 'gs-gallery',
  templateUrl: './gs-gallery.component.html',
  styleUrls: ['./gs-gallery.component.less']
})
export class GsGalleryComponent implements OnChanges {
  @Input() isVisible: boolean;

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    changes.isVisible.currentValue ? this.animate() : this.clerAnimation();
  }


  private animate() {
    const images: HTMLImageElement[] = this.elem.nativeElement.querySelectorAll('img');
    images.forEach((image: HTMLImageElement, index: number) => {
      setTimeout(() => {
        image.classList.add('anime');
      }, 50 * (index + 1));
    });

    const covers: HTMLDivElement[] = this.elem.nativeElement.querySelectorAll('.gs-image-container');

    setTimeout(() => {
      covers.forEach((image: HTMLImageElement, index: number) => {
        if (index === 0 || index === 5 || index === 6) {
          setTimeout(() => {
            image.classList.add('cover');
          }, 100 * (index + 1));
        }
      });
    }, 1000);
  }

  private clerAnimation() {
    const images = this.elem.nativeElement.querySelectorAll('img');
    images.forEach((image: any, index: number) => {
      setTimeout(() => {
        image.classList.remove('anime');
      }, 50 * (index + 1));
    });

    const covers: HTMLDivElement[] = this.elem.nativeElement.querySelectorAll('.gs-image-container');
    covers.forEach((image: HTMLImageElement, index: number) => {
      image.classList.remove('cover');
    });
  }
}
