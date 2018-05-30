import {Injectable} from '@angular/core';
import {UserApi} from '../../fw/users/user-api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()

export class UserService implements UserApi {

  isAuthenticated = false;

  constructor() {}

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({});
  }
}
