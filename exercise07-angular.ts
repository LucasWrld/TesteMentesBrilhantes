/**
 * Crie um AuthService com método isAuthenticated e implemente AuthGuard para proteger a
 * rota /admin.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}

@Component({ selector: 'app-admin', template: `<h1>Admin</h1>` })
export class AdminComponent {}

@Component({ selector: 'app-login', template: `<h1>Login</h1>` })
export class LoginComponent {}

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [AdminComponent, LoginComponent],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
