import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLeftComponent } from './aside-left.component';

describe('AsideLeftComponent', () => {
  let component: AsideLeftComponent;
  let fixture: ComponentFixture<AsideLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideLeftComponent]
    });
    fixture = TestBed.createComponent(AsideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
