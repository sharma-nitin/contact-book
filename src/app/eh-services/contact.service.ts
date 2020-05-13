import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactIndex: number;

  /**
   * Contacts mock data can be later fetched from api
   */
  contacts = [{
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: '8448174434',
    status: 'Active'
  }, {
    firstName: 'John',
    lastName: 'Doe',
    email: 'John@gmail.com',
    phoneno: '9765436789',
    status: 'Active'
  }, {
    firstName: 'Smith',
    lastName: 'jones',
    email: 'Smith@gmail.com',
    phoneno: '8498766785',
    status: 'InActive'
  }, {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'Tony@gmail.com',
    phoneno: '7443487698',
    status: 'InActive'
  }, {
    firstName: 'Seb',
    lastName: 'palardi',
    email: 'spalardi@gmail.com',
    phoneno: '9844987443',
    status: 'Active'
  }, {
    firstName: 'Ray',
    lastName: 'hudson',
    email: 'hudson@gmail.com',
    phoneno: '8987675434',
    status: 'InActive'
  }];

  constructor() { }

  /**
   * Gets contacts
   * @returns contacts
   */
  getContacts() {
    return this.contacts;
  }

  /**
   * Sets index to be edited
   * @param index -index to be edited
   */
  setIndexToBeEdited(index) {
    this.contactIndex = index;
  }

  /**
   * Gets index to be edited
   * @returns index to be edited
   */
  getIndexToBeEdited() {
    return this.contactIndex;
  }

  /**
   * Deletes contact and pdate contacts
   * @param updatedContacts - list of updated contacts
   */
  deleteContact(updatedContacts) {
    this.contacts = [...updatedContacts];
  }

  /**
   * Updates contacts with newly added/updated
   * @param updatedContacts - list of updated contacts
   */
  update(updatedContacts) {
    this.contacts = [...updatedContacts];
  }
}
