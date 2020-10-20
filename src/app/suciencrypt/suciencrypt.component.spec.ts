import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuciencryptComponent } from './suciencrypt.component';

describe('SuciencryptComponent', () => {
  let component: SuciencryptComponent;
  let fixture: ComponentFixture<SuciencryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuciencryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuciencryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
