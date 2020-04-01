import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {

  blog: Blog;
  contentLoaded = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.blogService.getBlog(title).subscribe(blog => {
      this.blog = blog;
      this.contentLoaded = true;
    });
  }

}
