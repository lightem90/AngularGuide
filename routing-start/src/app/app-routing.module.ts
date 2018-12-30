import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent, children: [
    { path: 'users/:id/:name', component: UsersComponent }] },
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/:edit', component: EditServerComponent }]},
  { path: '', component: HomeComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'} //MUST BE LAST, IT IDENTIFIES ALL PATHS!
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
