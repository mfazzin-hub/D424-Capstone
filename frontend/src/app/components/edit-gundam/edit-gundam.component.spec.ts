import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGundamComponent } from './edit-gundam.component';

describe('EditGundamComponent', () => {
  let component: EditGundamComponent;
  let fixture: ComponentFixture<EditGundamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGundamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGundamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
