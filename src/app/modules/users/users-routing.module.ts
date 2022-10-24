import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './create-users/create-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {CanActivateViaAuthGuard} from "../../guards/can-activate-via-auth.guard";

const routes: Routes = [
  {path:'',component: ListUsersComponent, canActivate: [CanActivateViaAuthGuard] },
  {path:'add-user',component: CreateUsersComponent, canActivate: [CanActivateViaAuthGuard] },
  {path:'modify-user',component: EditUsersComponent, canActivate: [CanActivateViaAuthGuard] },
  {path:'delete-user',component: DeleteUsersComponent, canActivate: [CanActivateViaAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
