import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../eh-services/contact.service';
import { iContact } from '../eh-interface/contact.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'eh-contact-list',
  templateUrl: './eh-contact-list.component.html',
  styleUrls: ['./eh-contact-list.component.scss']
})
export class EhContactListComponent implements OnInit {
  contacts: iContact[];
  modalRef: BsModalRef;
  contacttoDelete: iContact;
  indexToDelete: number;
  constructor(private router: Router,
    private contactService: ContactService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  navigate(status, index?) {
    if (status === 'add') {
      this.router.navigate(['add-contact']);
    } else
      if (status === 'edit') {
        this.contactService.setIndexToBeEdited(index);
        this.router.navigate(['edit-contact/']);
      }
  }

  deleteModal(index,contact,template,) {
    this.indexToDelete = index;
    this.contacttoDelete = contact;
    this.modalRef = this.modalService.show(template);

  }

  delete() {
    this.contacts.splice(this.indexToDelete, 1);
    this.contactService.deleteContact(this.contacts);
    this.modalRef.hide();
  }
}
