import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqtableComponent } from './reqtable.component';

describe('ReqtableComponent', () => {
  let component: ReqtableComponent;
  let fixture: ComponentFixture<ReqtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
