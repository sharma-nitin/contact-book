import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhContactFormComponent } from './eh-contact-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EhContactListComponent } from '../eh-contact-list/eh-contact-list.component';
describe('EhContactFormComponent', () => {
  let component: EhContactFormComponent;
  let fixture: ComponentFixture<EhContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EhContactFormComponent,EhContactListComponent],
      imports: [FormsModule,
        RouterTestingModule.withRoutes(
          [  { path: 'contact-list', component: EhContactListComponent },
          { path: 'edit-contact', component: EhContactFormComponent }
        ])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('makes call to routeBasedAction ', () => {
    spyOn(component, 'routeBasedAction').and.callThrough();
    fixture.whenStable().then(() => {
      const router = TestBed.get(Router);
      router.url = '/add-contact';
      component.routeBasedAction();
      expect(component.routeBasedAction()).toHaveBeenCalled();
    });
  });


  it('makes call to routeBasedAction ', () => {
    spyOn(component, 'routeBasedAction').and.callThrough();
    fixture.whenStable().then(() => {
      const router = TestBed.get(Router);
      router.url = '/edit-contact';
      component.routeBasedAction();
      expect(component.routeBasedAction).toHaveBeenCalled();
    });
  });

  it('makes call to navigate ', () => {
    spyOn(component, 'navigate').and.callThrough();
    fixture.whenStable().then(() => {
      component.navigate();
      expect(component.navigate).toHaveBeenCalled();
    });
  });
  it('makes call to addContact ', () => {
    spyOn(component, 'addContact').and.callThrough();
    fixture.whenStable().then(() => {
      component.addContact();
      expect(component.addContact).toHaveBeenCalled();
    });
  });

  it('makes call to updateContact ', () => {
    spyOn(component, 'updateContact').and.callThrough();
    fixture.whenStable().then(() => {
      component.updateContact();
      expect(component.updateContact).toHaveBeenCalled();
    });
  });

});
