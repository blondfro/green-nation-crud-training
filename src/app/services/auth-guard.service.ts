import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {CanActivate, CanActivateChild, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate(): boolean {
    console.log('AuthGuard canActivate called ' + this.userService.isAuthenticated);

    if (!this.userService.isAuthenticated) {
      console.log('not auth');
      this.router.navigate(['/signin']);
    }
    return this.userService.isAuthenticated;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
