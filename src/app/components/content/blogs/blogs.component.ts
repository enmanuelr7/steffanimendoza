import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(
    private blogService: BlogService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`VASA - BLOG`);
    this.metaTagService.updateTag({
      tag: 'description',
      content: `blogs sobre belleza, fitness, mindfulness, y alimentación`
    }, `name='description'`);
    this.blogService.getBlogs().subscribe(
      res => {
        if (res.length >= 3) {
          this.blogs = res.slice(res.length - 3).reverse();
        } else if (res.length === 2) {
          this.blogs = res.slice(res.length - 2).reverse();
        } else {
          this.blogs = res;
        }
        this.contentLoaded = true;
      },
      err => {
        return console.error('error lanzado', err);
      }
    );
  }




}
