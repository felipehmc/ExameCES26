import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevedoresComponent } from './devedores.component';

describe('DevedoresComponent', () => {
  let component: DevedoresComponent;
  let fixture: ComponentFixture<DevedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
