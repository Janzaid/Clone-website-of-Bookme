import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbSearchComponent } from './omdb-search.component';

describe('OmdbSearchComponent', () => {
  let component: OmdbSearchComponent;
  let fixture: ComponentFixture<OmdbSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmdbSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmdbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
