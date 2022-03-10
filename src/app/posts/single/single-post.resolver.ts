import { IPost } from "../post.model";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { PostService } from "../post.service";

@Injectable()
export class SinglePostResolver implements Resolve<any>{
    constructor(private postService: PostService){

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.postService.getPost(route.params['id'])
    }
}