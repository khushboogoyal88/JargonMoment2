import { AccountService } from './../../services/account.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() switchTheme = new EventEmitter();
  
  model: any = {};
  currentUserName: string = '';
  isWhite: boolean = false;

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  
  }


  login(){
    this.model.username = this.model.username.toLowerCase();
    this.accountService.login(this.model).subscribe({
      next: response => this.router.navigateByUrl('/members'),
    })
  }

  logOut(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


  handleChange() {
    this.switchTheme.emit(this.isWhite);
    console.log(this.isWhite);
  
  }

}