import { TestBed } from '@angular/core/testing';

import { BlogHttpService } from './blog-http.service';

describe('BlogHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogHttpService = TestBed.get(BlogHttpService);
    expect(service).toBeTruthy();
  });
});
