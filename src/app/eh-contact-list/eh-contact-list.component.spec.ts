import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhContactListComponent } from './eh-contact-list.component';
import { RouterModule } from '@angular/router';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

describe('EhContactListComponent', () => {
  let component: EhContactListComponent;
  let fixture: ComponentFixture<EhContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EhContactListComponent],
      imports: [RouterModule.forRoot([]), ModalModule.forRoot()],
      providers: [BsModalService,
        BsModalRef,]
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

  it('makes call to navigate add', () => {
    spyOn(component, 'navigate').and.callThrough();
    const status = 'add';
    const index = 2;
    component.navigate(status, index);
    expect(component.navigate).toHaveBeenCalled();
  });


  it('makes call to navigate edit', () => {
    spyOn(component, 'navigate').and.callThrough();
    const status = 'edit';
    const index = 2;
    component.navigate(status, index);
    expect(component.navigate).toHaveBeenCalled();
  });

  it('makes call to deleteModal ', () => {
    spyOn(component, 'deleteModal').and.callThrough();
    const index = 2;
    const contact = [];
    let temp;
    component.deleteModal(index, contact, temp);
    expect(component.deleteModal).toHaveBeenCalled();
  });

});
