import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-recent-blog',
  templateUrl: './recent-blog.component.html',
  styleUrls: ['./recent-blog.component.scss']
})
export class RecentBlogComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit() {
  }

}
