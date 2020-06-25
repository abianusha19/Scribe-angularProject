import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title:string;
  jsonDoc:string;
  editorConfig:any;
  @Output('postCreated') postCreated=new EventEmitter();


  constructor() { 
    
    this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": "auto",
      "minHeight": "150px",
      "width": "auto",
      "minWidth": "0",
      "translate": "yes",
      "enableToolbar": true,
      "showToolbar": true,
      "placeholder": "Enter text here...",
      "imageEndPoint": "",
      "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink", "image"],
        ["code"]
      ]
    }
  }

  ngOnInit(): void {
    
  }
  submitpost()
  {
     
    
     firebase.firestore().collection("posts").add({
       title:this.title,
       content:this.jsonDoc,
       owner:firebase.auth().currentUser.uid,
       created:firebase.firestore.FieldValue.serverTimestamp()
     }).then((data)=>{console.log(data);
    this.postCreated.emit();
    }).catch((error)=>{console.log(error)})
  }

}
