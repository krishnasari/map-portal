import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAnalysis } from './recent-analysis';

describe('RecentAnalysis', () => {
  let component: RecentAnalysis;
  let fixture: ComponentFixture<RecentAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
