import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../eh-services/contact.service';
import { iContact } from '../eh-interface/contact.interface';

@Component({
  selector: 'eh-contact-form',
  templateUrl: './eh-contact-form.component.html',
  styleUrls: ['./eh-contact-form.component.css']
})

export class EhContactFormComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  phoneno: number;
  UserStatus = ['Active', 'InActive'];
  status = this.UserStatus[0];
  contacts: iContact[];
  activeRoute: string;
  updatedStatus = '';

  constructor(private router: Router,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.routeBasedAction();
  }

  routeBasedAction() {
    if (this.router.url === '/add-contact') {
      this.activeRoute = 'add';
    } else
      if (this.router.url === '/edit-contact') {
        this.activeRoute = 'edit';
        const editContact = this.contacts[this.contactService.getIndexToBeEdited()];
        this.firstName = editContact.firstName;
        this.lastName = editContact.lastName;
        this.email = editContact.email;
        this.phoneno = editContact.phoneno;
        this.status = editContact.status;
      }
  }

  navigate() {
    this.router.navigate(['contact-list']);
  }

  onStatusChange(updatedstatus) {
    this.status = updatedstatus;
  }

  updateContact() {
    const contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneno: this.phoneno,
      status: this.status
    };
    this.contacts[this.contactService.getIndexToBeEdited()] = contact;
    this.contactService.update(this.contacts);
    this.updatedStatus = 'updated';
    setTimeout(() => {
      this.router.navigate(['contact-list']);
    }, 2000);
  }

  addContact() {
    const contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneno: this.phoneno,
      status: this.status
    };
    const updatedContacts = [...this.contacts, ...[contact]];
    this.contactService.update(updatedContacts);
    this.updatedStatus = 'added';
    setTimeout(() => {
      this.router.navigate(['contact-list']);
    }, 2000);
  }
}
