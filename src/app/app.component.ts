import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
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

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  mostrarUsuarios() {
    this.mostrar = true;
  }
}
