import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorContentComponent } from './vendor-content.component';

describe('VendorContentComponent', () => {
  let component: VendorContentComponent;
  let fixture: ComponentFixture<VendorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
