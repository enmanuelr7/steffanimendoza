import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Title, Meta } from '@angular/platform-browser';
import { ReplaceDashPipe } from 'src/app/pipes/replace-dash.pipe';

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
    private route: ActivatedRoute,
    private titleService: Title,
    private metaTagService: Meta,
    private replaceDash: ReplaceDashPipe
  ) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    const titleNoDash = this.replaceDash.transform(title);
    this.titleService.setTitle(`${titleNoDash} | VASA`);
    this.blogService.getBlog(title).subscribe(blog => {
      this.blog = blog;
      this.contentLoaded = true;
    });
  }

}
