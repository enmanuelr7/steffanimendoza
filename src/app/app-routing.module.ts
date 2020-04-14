import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
import { AboutComponent } from './components/content/about/about.component';
import { BlogsComponent } from './components/content/blogs/blogs.component';
import { BlogComponent } from './components/content/blog/blog.component';
import { CategoryComponent } from './components/content/category/category.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  {
    path: 'blog', children: [
      { path: '', component: BlogsComponent },
      { path: 'fitness', component: CategoryComponent },
      { path: 'food', component: CategoryComponent },
      { path: 'mindfulness', component: CategoryComponent },
      { path: 'beauty', component: CategoryComponent },
      { path: ':title', component: BlogComponent },
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
