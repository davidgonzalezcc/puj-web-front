import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    DeleteUsersComponent,
    EditUsersComponent,
    CreateUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
