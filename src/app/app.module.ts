import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DefaultBannerComponent } from './default-banner/default-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MenuBarComponent,
    DefaultBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
