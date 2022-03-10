import { Component, Input, OnChanges } from "@angular/core";
import { IComment } from "./comment.model";

@Component({
    selector: 'lgcc-comments-list',
    templateUrl: './comment-list.component.html'
})

export class CommentListComponent implements OnChanges {
    @Input() comments!: IComment[]
    @Input() postId!: number
    
    constructor(){
    }

    ngOnChanges(): void {
        this.comments?.forEach(element => {
            if(element.parent_id){
                var parent = this.comments.filter(com => com.id == element.parent_id)[0];
                if(parent.children){
                    parent.children.push(element)
                }else{
                    parent.children = [];
                    parent.children.push(element)
                }
            }
        });

        this.comments = this.comments?.filter(all => !all.parent_id);
    
    }
}