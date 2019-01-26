import { TodoPage } from './../todo/todo.page';
import { ListPage } from './../list/list.page';
import { HomePage } from './../home/home.page';
import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'home', component: HomePage },
            { path: 'list', component: ListPage },
            { path: 'todos', component: TodoPage }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
