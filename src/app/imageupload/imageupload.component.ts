import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrl: './imageupload.component.css'
})
export class ImageuploadComponent {
  shoesImage:any
  ujCiponyom:any={}

  constructor(private base:BaseService){
    this.base.getAll().snapshotChanges().pipe(
      map( (changes)=> changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ))
    )
    .subscribe((res)=>{
        this.shoesImage=res
    })
  }

  add(){
    // this.base.add({helyseg:"Budapest", kepUrl:"", datum:"2025-05-20"})
    this.base.add(this.ujCiponyom)
    this.ujCiponyom={}
  }

  update(body:any){
    this.base.update(body)
  }

  delete(body:any){
    this.base.remove(body)
  }
}
