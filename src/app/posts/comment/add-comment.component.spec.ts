import { PostService } from './../post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCommentComponent } from './add-comment.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AddCommentComponent', () => {
    let component: AddCommentComponent
    let fixture: ComponentFixture<AddCommentComponent>
    let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [
            AddCommentComponent
        ],
        imports: [
          FormsModule, 
          ReactiveFormsModule,
          RouterTestingModule
        ],
        providers:[
            PostService,
            HttpClient,
            HttpHandler
        ]
      }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  });
  
  describe('Testing Form', () => {
    it('Testing the number of elements rendered in UI are equals to the form controls', () => {
      const formElement = fixture.debugElement.nativeElement.querySelector("#newCommentForm");
      const inputElements = formElement.querySelectorAll('input')
      const textAreaElement = formElement.querySelectorAll('textarea')

      expect(inputElements.length).toEqual(1)
      expect(textAreaElement.length).toEqual(1)
    })

    it('Testing validations when inputs empty', () => {
        component.newCommentForm.controls['user'].setValue('');
        component.newCommentForm.controls['content'].setValue('');
        
        const isFormValid = component.newCommentForm.valid;

        expect(isFormValid).toBeFalsy();
    })

    it('Testing user field', () => {
        const user = component.newCommentForm.controls['user'];
        expect(user.valid).toBeFalsy();
    
        user.setValue('');
        expect(user.hasError('required')).toBeTruthy();
    })

    it('Testing content field', () => {
        const content = component.newCommentForm.controls['content'];
        expect(content.valid).toBeFalsy();
    
        content.setValue('');
        expect(content.hasError('required')).toBeTruthy();
    })

    it('Testing validations when inputs valid', () => {
        component.newCommentForm.controls['user'].setValue('teste');
        component.newCommentForm.controls['content'].setValue('teste');

        const isFormValid = component.newCommentForm.valid;

        expect(isFormValid).toBeTruthy();
    })

    it('Should call saveComment method', () => {
        spyOn(component, 'saveComment');
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(component.saveComment).toHaveBeenCalledTimes(1);
      });
  })
  
});
