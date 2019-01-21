import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Post} from '../post.model';
import {NgForm} from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


 enteredContent = '';
 enteredTitle = '';
 private mode = 'create';
private postId: string;
 post: Post;
  constructor(public postsService: PostsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('postId')) {
         this.mode = 'edit';
         this.postId = paramMap.get('postId');
          this.postsService.getpost(this.postId).subscribe(postData => {
           this.post = { id: postData._id, title: postData.title , content: postData.content };
         });
        } else {
          this.mode = 'create';
          this.postId = null ;
        }
    });
    // paramMap is an observable
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
    this.postsService.addPost(form.value.title , form.value.content);
    } else {
      this.postsService.updatePost(this.postId, form.value.title, form.value.content);
    }

    form.resetForm();
  }
}
