import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevedorDetailComponent } from './devedor-detail.component';

describe('DevedorDetailComponent', () => {
  let component: DevedorDetailComponent;
  let fixture: ComponentFixture<DevedorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevedorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevedorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
