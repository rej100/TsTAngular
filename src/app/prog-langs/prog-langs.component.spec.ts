import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLangsComponent } from './prog-langs.component';

describe('ProgLangsComponent', () => {
  let component: ProgLangsComponent;
  let fixture: ComponentFixture<ProgLangsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgLangsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgLangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});