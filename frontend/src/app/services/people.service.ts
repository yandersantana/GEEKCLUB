import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people';

import { PeopleComponent } from '../components/people/people.component';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  selectedPeople: People;
  people: People[];
  readonly URL_API = 'http://localhost:3000/people';

  constructor(private http: HttpClient) { 
    this.selectedPeople = new People();
  }

  getPeople(){ 
    return this.http.get(this.URL_API);
  }

  postPeople(People: People){ 
    return this.http.post(this.URL_API, People);
  }

  putPeople(people: People){ 
    return this.http.put(this.URL_API + `/${people._id}`, people);
  }

  deletePeople(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}
