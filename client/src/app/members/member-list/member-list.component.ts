import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MembersService } from './../../_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private MembersService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.MembersService.getMembers();
  }

  /*loadMembers() {
    this.MembersService.getMembers().subscribe(members => {
      this.members = members;
  })}*/


}
