import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './componnents/errors/not-found/not-found.component';
import { ServerErrorComponent } from './componnents/errors/server-error/server-error.component';
import { TestErrorsComponent } from './componnents/errors/test-errors/test-errors.component';
import { HomeComponent } from './componnents/home/home.component';
import { ListsComponent } from './componnents/lists/lists.component';
import { MemberDetailComponent } from './componnents/members/member-detail/member-detail.component';
import { MembersListComponent } from './componnents/members/members-list/members-list.component';
import { MessagesComponent } from './componnents/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MembersListComponent, canActivate: [AuthGuard] },
      { path: 'members/:id', component: MemberDetailComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'errors', component: TestErrorsComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'server-error', component: ServerErrorComponent },
      { path: '**', component: HomeComponent, pathMatch: 'full' },
    ]
  },

  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
