import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform:FormGroup;
  message:string="";
  userError:any;
  
  constructor(public fb:FormBuilder,public authservice:AuthenticationService,public router:Router) 
  {
    this.myform=this.fb.group(
      {
        email:['',[Validators.email,Validators.required]],
        password:['',[Validators.required]]
      })
      
    
   }

   onsubmit(form)
   {
    this.authservice.login(form.value.email,form.value.password).then((data)=>
     {
       console.log(data);
       this.message="You have been successfully logged in";
       this.router.navigate(['/myblogs']);
     }).catch((error)=>
     {
       console.log(error);
       this.userError=error;
     })
   }
  
  ngOnInit(): void {
    

  }

}
