import { Component, Input, OnInit } from '@angular/core';
import { IComment } from './comment.model';
import { faClose, faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgcc-comment-content',
  templateUrl: './comment-content.component.html',
})
export class CommentContentComponent implements OnInit {
  @Input() comment!: IComment;
  @Input() show: boolean = false;

  faReply = faReply;
  faClose = faClose;
  showReplyForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showReplyForm = false;
    this.show = false;
  }
}
