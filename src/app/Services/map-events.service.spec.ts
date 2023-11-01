import { TestBed } from '@angular/core/testing';

import { MapEventsService } from './map-events.service';

describe('MapEventsService', () => {
  let service: MapEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
