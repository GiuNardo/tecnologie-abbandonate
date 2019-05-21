import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotizieComponent } from './notizie.component';

describe('NotizieComponent', () => {
  let component: NotizieComponent;
  let fixture: ComponentFixture<NotizieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotizieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotizieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
