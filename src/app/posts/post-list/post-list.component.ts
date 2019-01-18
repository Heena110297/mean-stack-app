import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
   posts: Post[] = [
  //   {title: 'First Post', content: 'This is the First Post'},
  //   {title: 'Second Post', content: 'This is the Second Post'},
  //   {title: 'Third Post', content: 'This is the Third Post'}
   ];
   private postsSub: Subscription;
  constructor(public postsService: PostsService) { }

  ngOnInit() {
   this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts ;
    });
    // function which get sexecuted whenever a new value is recieved
    // error is emitted
    // observable is completed no more data expected
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

}
