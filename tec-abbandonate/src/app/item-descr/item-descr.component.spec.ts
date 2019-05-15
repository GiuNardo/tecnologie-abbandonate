import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescrComponent } from './item-descr.component';

describe('ItemDescrComponent', () => {
  let component: ItemDescrComponent;
  let fixture: ComponentFixture<ItemDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
