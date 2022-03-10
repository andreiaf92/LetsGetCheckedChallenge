import { PostsListComponent } from './posts-list.component';

describe('SessionListComponent', () => {
    let component: PostsListComponent
    let mockPostService: any, routeMock: any

  beforeEach(async () => {
    component = new PostsListComponent(routeMock, mockPostService)
  });
  
  describe('ngOnInit', () => {
    it('should get posts', () => {
        expect(component.posts).not.toBeNull()
    })
    })
});
