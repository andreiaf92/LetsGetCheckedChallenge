import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsListComponent, SinglePostComponent, PostsListResolver, PostService, SinglePostResolver, CommentListComponent } from './posts';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostsListComponent,
    SinglePostComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsListResolver,
    SinglePostResolver,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
