import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipyDetailsComponent } from './recipy-details.component';

describe('RecipyDetailsComponent', () => {
  let component: RecipyDetailsComponent;
  let fixture: ComponentFixture<RecipyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
