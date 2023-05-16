import { User } from './models/user';
import { AccountService } from './services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = 'Jargon Moment 2';
  users: any;

  constructor(private http: HttpClient, public accountService:AccountService){
     
  }
  
  ngOnInit(): void {
    this.getUsers();   
    this.setCurrentUser()
  }

  getUsers(){
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCurrentUser(user);
  }
}
