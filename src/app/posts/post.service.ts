import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { IPost, IComment } from ".";

@Injectable()
export class PostService {
    constructor(private http: HttpClient){

    }

    getPosts(): Observable<IPost[]> {
       return this.http.get<IPost[]>('/api/posts')
       .pipe(catchError(this.handleError<IPost[]>('getPosts', [])))
    }

    getPost(id:number): Observable<IPost> {
      return this.http.get<IPost>('/api/posts/' + id)
      .pipe(catchError(this.handleError<IPost>('getPost')))
    }

    getPostComments(id:number): Observable<IComment[]> {
      return this.http.get<IComment[]>(`/api/posts/${id}/comments`)
      .pipe(catchError(this.handleError<IComment[]>('getPostComments')))
    }

    saveComment(comment: IComment, id:number){
      const options = { headers: new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post<IComment>(`/api/posts/${id}/comments`, comment, options)
      .pipe(catchError(this.handleError<IComment>('saveComment')))
    }


    private handleError<T>(operation = 'operation', result?: T){
        return (error:any) : Observable<T> => {
          console.log(error)
          return of(result as T)
        }
      }
}