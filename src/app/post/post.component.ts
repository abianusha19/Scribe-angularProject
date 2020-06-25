import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post:any;
  postData:any={};
  user:any={};
  @Output('onDelete') onDelete = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.postData=this.post.data();
    this.postData.content= this.postData.content.replace(/(<([^>]+)>)/ig," ");
    console.log(this.postData.title);
    this.user=firebase.auth().currentUser;
  }
  deletepost()
  {
    firebase.firestore().collection('posts').doc(this.post.id).delete().then(()=>
    {this.onDelete.emit();})
  }

}
