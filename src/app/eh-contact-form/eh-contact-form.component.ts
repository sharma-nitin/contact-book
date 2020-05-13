import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../eh-services/contact.service';
import { iContact } from '../eh-interface/contact.interface';
import { Contact } from '../../app/eh-model/contact';
@Component({
  selector: 'eh-contact-form',
  templateUrl: './eh-contact-form.component.html',
  styleUrls: ['./eh-contact-form.component.css']
})

export class EhContactFormComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  phoneno: string;
  UserStatus = ['Active', 'InActive'];
  status = this.UserStatus[0];
  contacts: iContact[];
  activeRoute: string;
  updatedStatus = '';
  contactModel = new Contact('', '', '', '', 'Active');

  constructor(private router: Router,
              private contactService: ContactService,
  ) { }

  /**
   * on init call to fetch contacts from api
   */
  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.routeBasedAction();
  }

  /**
   * Display form conditionally based on route
   * if '/add-contact' then empty form
   * '/edit-contact' then form will be prepopulated with contact details
   */
  routeBasedAction() {
    if (this.router.url === '/add-contact') {
      this.activeRoute = 'add';
    } else
      if (this.router.url === '/edit-contact') {
        this.activeRoute = 'edit';
        const editContact = this.contacts[this.contactService.getIndexToBeEdited()];
        this.contactModel = new Contact(
          editContact.firstName,
          editContact.lastName,
          editContact.email,
          editContact.phoneno,
          editContact.status);
      }
  }

  /**
   * Navigates to eh-contact-list component
   * when clicked on Back to Home Button
   */
  navigate() {
    this.router.navigate(['contact-list']);
  }

  /**
   * Updates eisting contact
   * Navigates to Contact List once updated
   */
  updateContact() {
    const contact = {
      firstName: this.contactModel.firstName,
      lastName: this.contactModel.lastName,
      email: this.contactModel.email,
      phoneno: this.contactModel.phoneno,
      status: this.contactModel.status
    };
    this.contacts[this.contactService.getIndexToBeEdited()] = contact;
    this.contactService.update(this.contacts);
    this.updatedStatus = 'updated';
    setTimeout(() => {
      this.router.navigate(['contact-list']);
    }, 1000);
  }

  /**
   * Adds contact when a New contact is added
   * Navigate to Contact List once added
   */
  addContact() {
    const contact = {
      firstName: this.contactModel.firstName,
      lastName: this.contactModel.lastName,
      email: this.contactModel.email,
      phoneno: this.contactModel.phoneno,
      status: this.contactModel.status
    };
    const updatedContacts = [...this.contacts, ...[contact]];
    this.contactService.update(updatedContacts);
    this.updatedStatus = 'added';
    setTimeout(() => {
      this.router.navigate(['contact-list']);
    }, 1000);
  }
}
