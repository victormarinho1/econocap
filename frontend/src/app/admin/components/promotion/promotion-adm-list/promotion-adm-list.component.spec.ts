import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAdmListComponent } from './promotion-adm-list.component';

describe('PromotionAdmListComponent', () => {
  let component: PromotionAdmListComponent;
  let fixture: ComponentFixture<PromotionAdmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionAdmListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionAdmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
