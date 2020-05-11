import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhContactListComponent } from './eh-contact-list.component';

describe('EhContactListComponent', () => {
  let component: EhContactListComponent;
  let fixture: ComponentFixture<EhContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
