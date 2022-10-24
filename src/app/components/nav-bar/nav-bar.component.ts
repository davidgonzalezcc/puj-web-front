import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapse = false;   // guardamos el valor
  loginBt = this.authService.isAuthenticated();
  logOutBt = !this.authService.isAuthenticated();
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  toggleState() {
    let verifyCollapse = this.isCollapse;
    this.isCollapse = !verifyCollapse;
  }
  logOut(){
    this.authService.deleteToken();
  }


}
