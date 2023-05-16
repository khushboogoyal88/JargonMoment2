import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  currentUserName: string = ''

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  
  }

 

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      
      },
      error: error => console.log(error)
    })
  }


}