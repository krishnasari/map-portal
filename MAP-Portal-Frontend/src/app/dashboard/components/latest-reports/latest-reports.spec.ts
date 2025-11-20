import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReports } from './latest-reports';

describe('LatestReports', () => {
  let component: LatestReports;
  let fixture: ComponentFixture<LatestReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
