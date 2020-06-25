import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(email:string,password:string)
  {
    return  firebase.auth().signInWithEmailAndPassword(email,password);
  }

  signup(email:string,password:string,firstname:string,lastname:string)
  {
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
      console.log(response);
     let randomnumer=Math.floor(Math.random()*1000);
    response.user.updateProfile({displayName:firstname+" "+lastname,photoURL:"http://api.adorable.io/avatars/"+randomnumer
    }).then(()=>{resolve(response.user);}).catch((error)=>{
      reject(error);})
    }).catch((error)=>{ reject(error);   })})
  }

  add(num1:number,num2:number)
  {
    console.log(num1+num2);
    return num1+num2;
  }
}
