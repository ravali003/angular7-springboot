import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  private users: User[];
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users)=>{
      console.log(users);
      this.users = users;
    },(error)=>{
      console.log(error);
    });
  }
  deleteUser(user){
    this.userService.deleteUser(user.id).subscribe((user)=>{
      this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    });
  }
  updateUser(user){
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }
  createUser(){
    let user = new User();
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

}
