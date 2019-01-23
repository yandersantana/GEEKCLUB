
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TypeUser } from 'src/app/models/type-user';
import { TypeUserService } from 'src/app/services/type-user.service';

declare var M: any;
declare var flag;
@Component({
  selector: 'app-type-user',
  templateUrl: './type-user.component.html',
  styleUrls: ['./type-user.component.css'],
  providers: [TypeUserService]
})
export class TypeUserComponent implements OnInit {
  
  constructor(private typeUserService: TypeUserService) { }
  public flag;
  ngOnInit() {
    this.getTypeUser();
  }

  addTypeUser(form: NgForm) {
    console.log(form.value);
    if(form.value._id){
      this.typeUserService.putTypeUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Update succesfully'});
        this.getTypeUser();
      });
    }else{
    this.typeUserService.postTypeUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Save succesfully'});
        this.getTypeUser();
      });
    }
  }
 
  getTypeUser() {
    this.typeUserService.getTypeUser()
      .subscribe(res => {
        this.typeUserService.typeUser = res as TypeUser[];
        console.log('getTypeUser', res);
        return res;
      });
  }

  editTypeUser(people: TypeUser) {
    this.typeUserService.selectedTypeUser = people;
  }

  deleteTypeUser(_id: string) {
    if(confirm('Are you sure you want to delete it?')){
    this.typeUserService.deleteTypeUser(_id)
      .subscribe(res => {
      this.getTypeUser();
      M.toast({html: 'Deleted succesfully'});
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.typeUserService.selectedTypeUser = new TypeUser();
    }
  }

}

