import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
