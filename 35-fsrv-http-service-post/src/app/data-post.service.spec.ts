import { TestBed, inject } from '@angular/core/testing';

import { DataPostService } from './data-post.service';

describe('DataPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPostService]
    });
  });

  it('should be created', inject([DataPostService], (service: DataPostService) => {
    expect(service).toBeTruthy();
  }));
});
