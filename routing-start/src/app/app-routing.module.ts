import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent, children: [
    { path: 'users/:id/:name', component: UsersComponent }] },
  { path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/:edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }]},
  { path: '', component: HomeComponent },
  { path: 'not-found', component: ErrorPageComponent},
  // { path: '**', redirectTo: '/not-found'}
  { path: '**', redirectTo: '/not-found'} // MUST BE LAST, IT IDENTIFIES ALL PATHS!
];


@NgModule({
  imports: [
    // useHash: true add a # at the start of the url to separate the url that must be parsed by the client (angular)
    // fe: localhost:4200/#/users -> only /users will be taken care of
    // usefull if the servers doesn't redirect correctly to the index html page containig the ng app
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
