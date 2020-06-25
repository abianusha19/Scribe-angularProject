import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any={}
  posts:any=[]
  age:number=185000;
  constructor(public activatedroute:ActivatedRoute) { 
    let id=this.activatedroute.snapshot.paramMap.get('id');
    console.log(id);
    this.getprofile(id);
    this.getuserspost(id);
  }

  ngOnInit(): void {
  }

  getprofile(id:string)
  {
    
    firebase.firestore().collection("users").doc(id).get().then((docSnapshot)=>
    {
      this.user=docSnapshot.data();
      this.user.displayName=this.user.firstname+" "+this.user.lastname;
      this.user.id=docSnapshot.id;
      this.user.hobbies = this.user.hobbies.split(",");
      
      console.log(this.user)
    }).catch((error)=>
    {
      console.log(error);
    })
  }

  getuserspost(id)
  {
firebase.firestore().collection("posts").where("owner","==",id).get().then((data)=>
{
  this.posts=data.docs;
})
  }


}
