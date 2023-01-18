import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interceptor-guards';
  users: User[] = [];
  mostrar = false;

  constructor(private usersService: UsersService, private auth: AuthService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  mostrarUsuarios() {
    this.mostrar = true;
  }

  isLogin(): boolean {
    return this.auth.isLogin();
  }

  logout(): void {
    this.auth.logout();
  }
}
