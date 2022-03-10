import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import ptPt from '@angular/common/locales/pt-PT';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsListComponent, SinglePostComponent, PostsListResolver, PostService, SinglePostResolver, CommentListComponent, CommentContentComponent, AddCommentComponent } from './posts';
registerLocaleData(ptPt)

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostsListComponent,
    SinglePostComponent,
    CommentListComponent,
    CommentContentComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostsListResolver,
    SinglePostResolver,
    PostService,
    {
      provide: LOCALE_ID, 
      useValue: 'pt-PT' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }