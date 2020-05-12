import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../eh-services/contact.service';
import { iContact } from '../eh-interface/contact.interface';

@Component({
  selector: 'eh-contact-list',
  templateUrl: './eh-contact-list.component.html',
  styleUrls: ['./eh-contact-list.component.scss']
})
export class EhContactListComponent implements OnInit {
  contacts: iContact[];
  constructor(private router: Router,
              private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  navigate(status,index?) {
    if (status === 'add') {
      this.router.navigate(['add-contact']);
    } else
      if (status === 'edit') {
        this.contactService.setIndexToBeEdited(index);
        this.router.navigate(['edit-contact/']);
      }
  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
   this.contactService.deleteContact(this.contacts);
  }
}
