import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/tabs/home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomePageModule'
  // },
  // {
  //   path: 'list',
  //   loadChildren: './list/list.module#ListPageModule'
  // },
  // { path: 'todos', loadChildren: './todo/todo.module#TodoPageModule' },
  { path: 'todo-details/:id', loadChildren: './todo/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'todo-details', loadChildren: './todo/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
