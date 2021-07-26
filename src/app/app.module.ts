import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentEu/home-page/home-page.component';
import { AboutMeComponent } from './componentEu/about-me/about-me.component';
import { LatestBlogPostComponent } from './componentEu/latest-blog-post/latest-blog-post.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    LatestBlogPostComponent,
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
