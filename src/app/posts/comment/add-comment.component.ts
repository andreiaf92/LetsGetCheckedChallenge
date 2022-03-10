import { IComment } from './comment.model';
import { Inject, LOCALE_ID } from '@angular/core';
import { PostService } from './../post.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'lgcc-add-comment',
  templateUrl: './add-comment.component.html',
})
export class AddCommentComponent implements OnInit {
  @Input() commentId: number | null = 0;
  @Input() postId: number = 0;
  newComment: IComment = {} as IComment
  hasErrors: boolean = false

  newCommentForm!: FormGroup;
  user!: FormControl;
  content!: FormControl;

  constructor(private postService: PostService, private router: Router, @Inject(LOCALE_ID) private locale: string) {}

  ngOnInit(): void {
    this.user = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);

    this.newCommentForm = new FormGroup({
      user: this.user,
      content: this.content,
    });
  }

  saveComment(formValues: any) {
        formValues.postId = this.postId
        formValues.parent_id = this.commentId
        formValues.date = formatDate(Date.now(),'yyyy-MM-dd', this.locale);

        this.postService.saveComment(formValues, this.postId).subscribe(() => {
            this.hasErrors = false
            window.location.reload();
        });
  }
}
