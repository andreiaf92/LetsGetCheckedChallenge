import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IPost } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'lgcc-posts',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
    posts: IPost[]
    
    constructor(private postsService: PostService, private route: ActivatedRoute) {
        this.posts = [];
    }
    
    ngOnInit(){
       this.posts = this.route.snapshot.data['posts']; 
    }
}