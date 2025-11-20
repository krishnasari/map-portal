import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesAnalyzed } from './files-analyzed';

describe('FilesAnalyzed', () => {
  let component: FilesAnalyzed;
  let fixture: ComponentFixture<FilesAnalyzed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilesAnalyzed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesAnalyzed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
