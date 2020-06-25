import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  message:string;
  user:any={};
  url:any = '';
  avatarStgRef:any;
  file:any;
  imgurl;
   
  constructor(public activatedroute:ActivatedRoute) { 
    let userId=this.activatedroute.snapshot.paramMap.get('postId');
    console.log(userId);
    this.getprofile(userId);
  }

  ngOnInit(): void {

    
  }

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.file = event.target.files[0];
       
    
    this.avatarStgRef = firebase.storage().ref('profile_photo/'+this.file.name);
    console.log(this.avatarStgRef);
    this.avatarStgRef.put(this.file).then(function(snapshot) {
      // Upload completed successfully, now we can get the download URL
      
  });
    }
    
  }

  getprofile(userId:string)
  {
   
    firebase.firestore().collection("users").doc(userId).get().then((docSnapshot)=>
    {
      this.user=docSnapshot.data();
      console.log(this.user);
      this.user.displayName=this.user.firstname+" "+this.user.lastname;
      this.user.id=docSnapshot.id;
      this.url=this.user.photoURL;
      
    }).catch((error)=>
    {
      console.log(error);
    })
  }

  update(event:any)
  {
    this.message="Updating Profile..";
    console.log(this.file.name);
 
    firebase.auth().currentUser.updateProfile({displayName:this.user.displayName,photoURL:this.user.photoURL})
    .then(()=>{
     
    let userId=firebase.auth().currentUser.uid;
    firebase.firestore().collection("users").doc(userId).update(
      {
        firstname:this.user.displayName.split(' ')[0],
        lastname:this.user.displayName.split(' ')[1],
        hobbies:this.user.hobbies,
        interest:this.user.interest,
        bio:this.user.bio,
        photoURL:this.user.photoURL
      }
    ).then(()=>{this.message="Profile Updated Successfully"}).catch((error)=>{console.log(error)})
 
  }).catch((error)=>{console.log(error)})
  
     }}