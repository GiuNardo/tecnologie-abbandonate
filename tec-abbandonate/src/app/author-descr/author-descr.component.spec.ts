import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDescrComponent } from './author-descr.component';

describe('AuthorDescrComponent', () => {
  let component: AuthorDescrComponent;
  let fixture: ComponentFixture<AuthorDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
