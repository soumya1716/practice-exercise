import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestListComponent } from './rest-list/rest-list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'RestList',component:RestListComponent},
  {path:'',redirectTo:'UserList',pathMatch:'full'},
  {path:'AddRest',component:AddRestaurantComponent},
  {path:'EditUser/:id',component:EditUserComponent}//here id is route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
