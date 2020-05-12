import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'eh-contact-list',
  templateUrl: './eh-contact-list.component.html',
  styleUrls: ['./eh-contact-list.component.scss']
})
export class EhContactListComponent implements OnInit {
  contacts = [{
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }, {
    firstName: 'Nitin',
    lastName: 'Sharma',
    email: 'sharmanitin1492@gmail.com',
    phoneno: 8448174434,
    status: 'Active'
  }]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['contact-form']);
  }
}
