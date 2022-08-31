import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './componnents/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './componnents/home/home.component';
import { RegisterComponent } from './componnents/register/register.component';
import { MembersListComponent } from './componnents/members/members-list/members-list.component';
import { MemberDetailComponent } from './componnents/members/member-detail/member-detail.component';
import { ListsComponent } from './componnents/lists/lists.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesComponent } from './componnents/messages/messages.component';
import { TestErrorsComponent } from './componnents/errors/test-errors/test-errors.component';
import { ServerErrorComponent } from './componnents/errors/server-error/server-error.component';
import { NotFoundComponent } from './componnents/errors/not-found/not-found.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MembersListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    ServerErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
