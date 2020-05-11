import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhContactFormComponent } from './eh-contact-form.component';

describe('EhContactFormComponent', () => {
  let component: EhContactFormComponent;
  let fixture: ComponentFixture<EhContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
