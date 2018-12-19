import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   posts: Post[] = [
  //   {title: 'First Post', content: 'This is the First Post'},
  //   {title: 'Second Post', content: 'This is the Second Post'},
  //   {title: 'Third Post', content: 'This is the Third Post'}
   ];
  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
