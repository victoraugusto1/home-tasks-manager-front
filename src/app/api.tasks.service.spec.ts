import { TestBed } from '@angular/core/testing';

import { ApiTasksService } from './api.tasks.service';

describe('ApiTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTasksService = TestBed.get(ApiTasksService);
    expect(service).toBeTruthy();
  });
});
