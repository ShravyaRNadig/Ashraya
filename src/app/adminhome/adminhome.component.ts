import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  id: string;
  fname: string;
  lname: string;
  constructor(private router: Router,
    private authService: AuthService,
    private crudservice: CrudService){}
    
  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.fname = localStorage.getItem('fname');
    this.lname = localStorage.getItem('lname');
  }
  logout() {
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
