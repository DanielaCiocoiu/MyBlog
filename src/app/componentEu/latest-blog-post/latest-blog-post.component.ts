import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/Post';

@Component({
  selector: 'app-latest-blog-post',
  templateUrl: './latest-blog-post.component.html',
  styleUrls: ['./latest-blog-post.component.css'],
})
export class LatestBlogPostComponent implements OnInit {
  public post: Post;

  constructor() {
    this.post = new Post();
    this.post.id = 1;
    this.post.autor = 'Dana';
    this.post.titlu = 'Travel';
    this.post.continut;
  }

  ngOnInit(): void {}

  isAutor(): string {
    this.isAutor instanceof Post;
    return this.post.autor;
  }
}
