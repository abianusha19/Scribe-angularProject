import { Component, OnInit,Input } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment:string;
  comments:any=[];
  loggedin:boolean=false;
  @Input('postId') postId:string;
  constructor() {

    firebase.auth().onAuthStateChanged((user)=>
    {
      if(user)
      {
        this.loggedin=true;
      }
      else{
        this.loggedin=false;
      }
    })
   }
  
  ngOnInit(): void {
    this.getcomments();
  }

  postcomment()
  {
      firebase.firestore().collection("comments").add(
        {
          text:this.comment,
          postId:this.postId,
          owner:firebase.auth().currentUser.uid,
          ownername:firebase.auth().currentUser.displayName,
          created:firebase.firestore.FieldValue.serverTimestamp()

        }
      ).then((data)=>
      {
        console.log("comment posted successfully");
        this.getcomments();
      }).catch((error)=>
      {
        console.log(error)
      }
      )
  }

  getcomments()
  {
    this.comments=[];
    firebase.firestore().collection("comments").where("postId","==",this.postId).orderBy("created","desc").get().then((data)=>
    {
      data.docs.forEach((commentRef)=>
      {
        this.comments.push(commentRef.data());
      }
      )
    })
  }


}
