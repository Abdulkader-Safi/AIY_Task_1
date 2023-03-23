import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDigramComponent } from './data-digram.component';

describe('DataDigramComponent', () => {
  let component: DataDigramComponent;
  let fixture: ComponentFixture<DataDigramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDigramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDigramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
