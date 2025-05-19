import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:any

  constructor(public config:ConfigService){
      this.config.langSub.subscribe(
        (res:any)=>this.login=res.login
      )
    }
}
