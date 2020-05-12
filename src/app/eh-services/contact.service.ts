import { Injectable } from '@angular/core';
import { iContact } from '../eh-interface/contact.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactIndex: number;
   contacts = [{
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'John',
    lastName: 'Doe',
    email: 'John@gmail.com',
    phoneno: 9765436789,
    status: 'Active'
  }, {
    firstName: 'Smith',
    lastName: 'jones',
    email: 'Smith@gmail.com',
    phoneno: 8498766785,
    status: 'InActive'
  }, {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'Tony@gmail.com',
    phoneno: 7443487698,
    status: 'InActive'
  }, {
    firstName: 'Seb',
    lastName: 'palardi',
    email: 'spalardi@gmail.com',
    phoneno: 9844987443,
    status: 'Active'
  }, {
    firstName: 'Ray',
    lastName: 'hudson',
    email: 'hudson@gmail.com',
    phoneno: 8987675434,
    status: 'InActive'
  }];

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  setIndexToBeEdited(index) {
    this.contactIndex = index;
  }

  getIndexToBeEdited() {
    return this.contactIndex;
  }

  deleteContact(updatedContacts){
    this.contacts = [...updatedContacts];
  }

  update(updatedContacts){
     this.contacts = [...updatedContacts];
   }
}
