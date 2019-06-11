import { Component, Renderer2, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  public galleryVisible = false;
  private scrolledToBottom  = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
  const gallerySec = this.elem.nativeElement.querySelector('gs-gallery');
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      gallerySec.classList.remove('slidedown');
      gallerySec.classList.add('slideup');
      this.scrolledToBottom = true;
    } else if (this.scrolledToBottom) {
      gallerySec.classList.remove('slideup');
      gallerySec.classList.add('slidedown');
      this.scrolledToBottom = false;
    }
  }


  public onIntersection(event: any) {
   if (event.visible) {
    this.galleryVisible = true;
   } else {
    this.galleryVisible = false;
   }
  }
}
