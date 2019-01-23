
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';
import { TypeUser } from 'src/app/models/type-user';
import { TypeUserService } from 'src/app/services/type-user.service';

declare var M: any;
declare var flag;
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService,TypeUserService ]
})
export class PeopleComponent implements OnInit {
  
  constructor(private peopleService: PeopleService , private typeUserService:TypeUserService ) { }
  public flag;
  ngOnInit() {
    this.getPeople();
    this.getTypeUser();
  }

  addPeople(form: NgForm) {
    console.log(form.value);
    if(form.value._id){
      this.peopleService.putPeople(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Update succesfully'});
        this.getPeople();
      });
    }else{
    this.peopleService.postPeople(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Save succesfully'});
        this.getPeople();
      });
    }
  }
 
  getPeople() {
    this.peopleService.getPeople()
      .subscribe(res => {
        this.peopleService.people = res as People[];
        console.log('getPeople', res);
        return res;
      });
  }

  getTypeUser() {
    this.typeUserService.getTypeUser()
      .subscribe(res => {
        this.typeUserService.typeUser = res as TypeUser[];
        console.log('getTypeUser', res);
        return res;
      });
  }

  editPeople(people: People) {
    this.peopleService.selectedPeople = people;
  }

  deletePeople(_id: string) {
    if(confirm('Are you sure you want to delete it?')){
    this.peopleService.deletePeople(_id)
      .subscribe(res => {
      this.getPeople();
      M.toast({html: 'Deleted succesfully'});
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.peopleService.selectedPeople = new People();
    }
  }

}
