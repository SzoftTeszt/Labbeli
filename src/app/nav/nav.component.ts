import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  menuItems:any
  lang="Magyar"

  constructor(public config:ConfigService){
    this.config.langSub.subscribe(
      (res:any)=>this.menuItems=res.menuItems
    )
  }

  changeLang(rovidites:any){
    this.config.downloadLang(rovidites)
    if (rovidites=="hu") this.lang="Magyar"
    if (rovidites=="en") this.lang="Englis"
  }
}
