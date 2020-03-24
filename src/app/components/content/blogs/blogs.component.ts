import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})
export class BlogsComponent implements OnInit {

  blogs: Blog[];
  contentLoaded = false;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      res => {
        if (res.length >= 3) {
          this.blogs = res.slice(res.length - 3).reverse();
        } else if (res.length === 2) {
          this.blogs = res.slice(res.length - 2).reverse();
        } else {
          this.blogs = res;
        }
      },
      err => {
        return console.error('error lanzado', err);
      }
    );
    this.contentLoaded = true;
  }




}
