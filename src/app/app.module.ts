import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GsHeaderComponent } from './gs-header/gs-header.component';
import { GsMainComponent } from './gs-main/gs-main.component';
import { GsGalleryComponent } from './gs-gallery/gs-gallery.component';
import { InViewportModule } from 'ng-in-viewport';
import { GsBottomComponent } from './gs-bottom/gs-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    GsHeaderComponent,
    GsMainComponent,
    GsGalleryComponent,
    GsBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
