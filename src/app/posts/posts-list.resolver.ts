import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { PostService } from "./post.service";

@Injectable()
export class PostsListResolver implements Resolve<any>{
    constructor(private postService: PostService){

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.postService.getPosts()
    }
}