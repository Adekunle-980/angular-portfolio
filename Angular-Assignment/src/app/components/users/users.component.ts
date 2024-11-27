import { Component, OnInit } from '@angular/core';
import { UsersService, IUsers } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
 users: IUsers[] =[]

 constructor (private userService: UsersService){}

 ngOnInit(): void {
     this.userService.getUsers().subscribe((data) => (this.users = data))
 }
}