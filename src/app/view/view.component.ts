import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import{ ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post:any={};
  postId:string="";
  constructor(public activatedroute:ActivatedRoute,public ngZone:NgZone) { 
    let postId=this.activatedroute.snapshot.paramMap.get("postId");

    this.postId=postId;
    console.log(postId);

    firebase.firestore().collection('posts').doc(postId).get().then((docSnapshot)=>{
      this.ngZone.run(()=>
      {
        this.post=docSnapshot.data();
        console.log(docSnapshot.data());
      })
    })
  }

  ngOnInit(): void {
  }

}
