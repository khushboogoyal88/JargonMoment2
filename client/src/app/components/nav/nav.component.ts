import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  currentUserName: string = ''

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  
  }

 

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => this.router.navigateByUrl('/members'),
      error: error => this.toastr.error(error.error),
    })
  }

  logOut(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}