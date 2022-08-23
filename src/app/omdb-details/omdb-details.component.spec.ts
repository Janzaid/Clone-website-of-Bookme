import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbDetailsComponent } from './omdb-details.component';

describe('OmdbDetailsComponent', () => {
  let component: OmdbDetailsComponent;
  let fixture: ComponentFixture<OmdbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmdbDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmdbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
