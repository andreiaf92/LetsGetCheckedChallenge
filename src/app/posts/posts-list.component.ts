import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faCalendar, faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import { IPost } from "./post.model";
import { PostService } from "./post.service";

@Component({
    selector: 'lgcc-posts',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
    posts: IPost[]
    faComments = faComments
    faCalendar = faCalendar
    faUser = faUser
    
    constructor(private route: ActivatedRoute, private postService: PostService) {
        this.posts = [];
    }
    
    ngOnInit(){
       this.posts = this.route.snapshot.data['posts']; 
       this.numberOfComments();
    }

    numberOfComments(){
        this.posts.forEach(p => {
            return this.postService.getPostComments(p.id).subscribe(comments => {
                p.comments = comments;
             });
        })
        
    }
}