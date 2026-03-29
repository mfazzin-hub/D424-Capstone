import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGundamComponent } from './add-gundam.component';

describe('AddGundamComponent', () => {
  let component: AddGundamComponent;
  let fixture: ComponentFixture<AddGundamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGundamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGundamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
