import { TestBed, inject } from '@angular/core/testing';

import { MarkersService } from './markers.service';

describe('MarkersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkersService]
    });
  });

  it('should be created', inject([MarkersService], (service: MarkersService) => {
    expect(service).toBeTruthy();
  }));
});
