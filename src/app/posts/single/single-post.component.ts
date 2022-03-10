import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faCalendar, faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import { IPost } from "../post.model";
import { PostService } from "../post.service";

@Component({
    selector: 'lgcc-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit{
    post!: IPost;
    faComments = faComments
    faCalendar = faCalendar
    faUser = faUser

    constructor(private route: ActivatedRoute, private postService: PostService) {
    }
    
    ngOnInit(){
       this.post = this.route.snapshot.data['post']; 
       this.postService.getPostComments(this.post.id).subscribe(c => {
           this.post.comments = c;
       })
    }
}