
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeUser } from '../models/type-user';

import { TypeUserComponent } from '../components/type-user/type-user.component';

@Injectable({
  providedIn: 'root'
})

export class TypeUserService {

  selectedTypeUser: TypeUser;
  typeUser: TypeUser[];
  readonly URL_API = 'http://localhost:3000/typeUser';

  constructor(private http: HttpClient) { 
    this.selectedTypeUser = new TypeUser();
  }

  getTypeUser(){ 
    return this.http.get(this.URL_API);
  }

  postTypeUser(TypeUser: TypeUser){ 
    return this.http.post(this.URL_API, TypeUser);
  }

  putTypeUser(typeUser: TypeUser){ 
    return this.http.put(this.URL_API + `/${typeUser._id}`, typeUser);
  }

  deleteTypeUser(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}
