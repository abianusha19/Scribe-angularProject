import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user:any={};
  posts:any[]=[];
   
  constructor() { 
    
    this.user=firebase.auth().currentUser;
    this.getposts();
  }

  ngOnInit(): void {
  }

  getposts()
  {
    firebase.firestore().collection("posts").orderBy('created','desc').get().then((QuerySnapshot)=>
    {
      console.log(QuerySnapshot.docs);
      this.posts=QuerySnapshot.docs;
    }).catch((error)=>{console.log(error);})
  }

  onpostcreated()
  {
    this.posts=[];
    this.getposts();
  }
  onDelete()
  {
    this.posts=[];
    this.getposts();
  }

}
