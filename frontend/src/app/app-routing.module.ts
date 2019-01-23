import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { TypeUserComponent } from './components/type-user/type-user.component';

export const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'typeUser', component: TypeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
