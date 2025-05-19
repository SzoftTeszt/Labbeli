import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public langSub= new Subject()

  constructor(private http:HttpClient) {
    this.downloadLang("hu");
   }


  public downloadLang(nation:string){
    this.http.get(`assets/lang${nation}.json`).subscribe(
      (data)=>this.langSub.next(data)
    )
  }

}
