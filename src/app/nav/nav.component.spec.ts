import { AppComponent } from './../app.component';
import { NavComponent } from './nav.component';
import { TestBed } from '@angular/core/testing';

describe('NavComponent', () => {
    it('should render title', () => {
        const fixture = TestBed.createComponent(NavComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.navbar-brand')?.textContent).toContain('LGC Challenge');
  });
});
