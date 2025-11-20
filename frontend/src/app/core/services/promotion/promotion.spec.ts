import { TestBed } from '@angular/core/testing';
import { PromotionsService } from './promotion.service';


describe('Promotion', () => {
  let service: PromotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
