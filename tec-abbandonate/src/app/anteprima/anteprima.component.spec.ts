import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteprimaComponent } from './anteprima.component';

describe('AnteprimaComponent', () => {
  let component: AnteprimaComponent;
  let fixture: ComponentFixture<AnteprimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnteprimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
