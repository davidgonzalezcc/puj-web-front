import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import {CanActivateViaAuthGuard} from "../../guards/can-activate-via-auth.guard";

const routes: Routes = [
  {path:'',component: ListBooksComponent},
  {path:'add-book',component: CreateBookComponent, canActivate: [CanActivateViaAuthGuard] },
  {path:'modify-book',component: EditBookComponent,canActivate: [CanActivateViaAuthGuard] },
  {path:'delete-book',component: DeleteBookComponent, canActivate: [CanActivateViaAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
