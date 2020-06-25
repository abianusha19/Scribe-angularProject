import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform:FormGroup;
  message:string="";
  userError:any;

  constructor(public fb:FormBuilder,public authservice:AuthenticationService,public router:Router) {
    this.myform=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]]
    },{validator:this.checkconfirmpassword("password","confirmpassword")}
    )

   }
  
  checkconfirmpassword(passwordkey:string,confirmpwdkey:string)
  {
    return (group:FormGroup)=>{
      let password=group.controls[passwordkey];
      let confirmpassword=group.controls[confirmpwdkey];
      

      if(password.value==confirmpassword.value)
      {
      return;
      }
      else
      {
        confirmpassword.setErrors({passwordwrong:true})
      }

    }
  }
  onsubmit(signupform)
  {
   let email:string=signupform.value.email;
   let password:string=signupform.value.password;
   let firstname:string=signupform.value.firstname;
   let lastname:string=signupform.value.lastname;

   this.authservice.signup(email,password,firstname,lastname).then((user:any)=>
   {
     firebase.firestore().collection("users").doc(user.uid).set({
       firstname:signupform.value.firstname,
       lastname:signupform.value.lastname,
       email:signupform.value.email,
       photoURL:user.photoURL,
       interest:"",
       hobby:"",
       bio:""


     }).then(()=>{this.message="You have been successfully signed up..You are now logged in...";
     this.router.navigate(['/myblogs']);
    }
     ).catch((error)=>
     {
      console.log(error);
     })
     
     

    })
  .catch((error)=>
    {
      console.log(error);
      this.userError=error;
    })
  

  }
  ngOnInit(): void {
  }

}
