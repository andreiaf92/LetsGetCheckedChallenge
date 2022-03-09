import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IPost } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'lgcc-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit{
    post!: IPost;

    constructor(private route: ActivatedRoute, private postService: PostService) {
    }
    
    ngOnInit(){
       this.post = this.route.snapshot.data['post']; 
    }
}