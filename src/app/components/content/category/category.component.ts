import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Blog } from 'src/app/models/Blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { quotes } from './quotes';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})
export class CategoryComponent implements OnInit {

  blogs: Blog[];
  quote: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    const categoryName = this.route.snapshot.url[0].path.toLowerCase();
    this.titleService.setTitle(`${categoryName.toUpperCase()} | VASA`);
    this.blogService.getBlogsByCategoryName(categoryName).subscribe(res => {
      this.blogs = res;
    }, err => {
      console.log(err);
    });
    this.quote = quotes.find(q => q.name === categoryName);
  }

}
