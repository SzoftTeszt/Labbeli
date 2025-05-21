import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  referencia: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.referencia = db.list("/shoesimage")
   }

   add(body:any){
    this.referencia.push(body)
   }

   remove(body:any){
    console.log(body)
    this.referencia.remove(body.key)
   }
   // CRUD
   removeAll(){
    this.referencia.remove()
   }

   update(body:any){
    const key= body.key
    delete body.key
    this.referencia.update(key,body)
   }

   getAll(){
    return this.referencia
   }
}
