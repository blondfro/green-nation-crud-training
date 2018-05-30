import { Component, OnInit } from '@angular/core';
import {UserApi} from '../user-api';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formError: string;
  submitting = false;

  constructor(private userApi: UserApi) { }

  ngOnInit() {
  }

}
