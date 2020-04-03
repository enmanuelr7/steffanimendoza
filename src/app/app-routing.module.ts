import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { BlogsComponent } from './components/content/blogs/blogs.component';
import { BlogComponent } from './components/content/blog/blog.component';
import { CategoryComponent } from './components/content/category/category.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'blog/beauty', component: CategoryComponent },
  { path: 'blog/fitness', component: CategoryComponent },
  { path: 'blog/food', component: CategoryComponent },
  { path: 'blog/mindfulness', component: CategoryComponent },
  { path: 'blog/:title', component: BlogComponent },
  { path: '**', pathMatch: 'prefix', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
