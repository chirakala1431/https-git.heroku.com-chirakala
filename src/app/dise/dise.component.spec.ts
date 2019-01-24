import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseComponent } from './dise.component';

describe('DiseComponent', () => {
  let component: DiseComponent;
  let fixture: ComponentFixture<DiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
