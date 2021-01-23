import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioBodyComponent } from './portfolio-body.component';

describe('PortfolioBodyComponent', () => {
  let component: PortfolioBodyComponent;
  let fixture: ComponentFixture<PortfolioBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
