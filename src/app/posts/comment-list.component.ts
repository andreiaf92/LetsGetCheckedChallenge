import { Component, Input, OnInit } from "@angular/core";
import { IComment } from "./comment.model";
import { PostService } from "./post.service";

@Component({
    selector: 'lgcc-comments-list',
    templateUrl: './comment-list.component.html'
})
export class CommentListComponent implements OnInit{
    @Input() postId!: number
    comments: IComment[]

    constructor(private postService: PostService){
        this.comments = []
    }

    ngOnInit(): void {
        this.postService.getPostComments(this.postId).subscribe(comments => {
            this.comments = comments
       })
    }
}