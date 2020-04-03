import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { BlogsComponent } from './components/content/blogs/blogs.component';
import { RecentBlogComponent } from './components/content/blogs/recent-blog/recent-blog.component';
import { BlogComponent } from './components/content/blog/blog.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { ReplaceDashPipe } from './pipes/replace-dash.pipe';
import { CategoryComponent } from './components/content/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    RecentBlogComponent,
    BlogComponent,
    MenuMobileComponent,
    ReplaceDashPipe,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
