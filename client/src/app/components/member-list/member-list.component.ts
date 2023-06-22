import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, take } from 'rxjs';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';
import { Subscription } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';
import { User } from 'src/app/models/user';
import { UserParams } from 'src/app/models/userParams';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  // members$: Observable<Member[]> | undefined;
  // subscription: Subscription | undefined;
  members: Member[] = [];
  pagination: Pagination | undefined;
  userParams: UserParams | undefined;
  bioList = [{ value: 'company', display: 'Companies' }, { value: 'candidate', display: 'Candidates' }]

  constructor(private memberService: MembersService) { 
  this.userParams = this.memberService.getUserParams();
  }
  ngOnInit(): void {
    this.loadMembers();
    
  }

  loadMembers() {
    if (this.userParams) {
      this.memberService.setUserParams(this.userParams);
      this.memberService.getMembers(this.userParams).subscribe({
        next: response => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        }
      })
    }
  }

  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    if (this.userParams && this.userParams?.pageNumber !== event.page) {
      this.userParams.pageNumber = event.page;
      this.memberService.setUserParams(this.userParams);
      this.loadMembers();
    }

  }
}
