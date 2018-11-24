import { TestBed, inject } from '@angular/core/testing';

import { DataErrorService } from './data-error.service';

describe('DataErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataErrorService]
    });
  });

  it('should be created', inject([DataErrorService], (service: DataErrorService) => {
    expect(service).toBeTruthy();
  }));
});
