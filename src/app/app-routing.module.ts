import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent, SinglePostComponent, PostsListResolver, SinglePostResolver } from './posts';

const routes: Routes = [    
  //{ path: 'posts/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'posts', component: PostsListComponent, resolve: {posts: PostsListResolver} },
  { path: 'posts/:id', component: SinglePostComponent, resolve: {post: SinglePostResolver} },
  //{ path: '404', component: Error404Component},
  { path: '', redirectTo: '/posts', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
