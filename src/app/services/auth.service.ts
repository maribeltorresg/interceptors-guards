import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

interface CurrentUser {
  user: string;
  pass: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  currentUser!: CurrentUser | null;

  login(user: string, pass: string): void {
    this.currentUser = {
      user,
      pass,
    };

    this.router.navigate(['/posts']);
  }

  logout(): void {
    this.currentUser = null;

    this.router.navigate(['/login']);
  }

  isLogin(): boolean {
    if (this.currentUser?.user && this.currentUser?.pass) {
      return true;
    }

    return false;
  }
}
