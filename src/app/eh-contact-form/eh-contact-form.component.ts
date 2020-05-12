import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'eh-contact-form',
  templateUrl: './eh-contact-form.component.html',
  styleUrls: ['./eh-contact-form.component.css']
})
export class EhContactFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['contact-list']);

  }

}
