import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import{HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {APP_BASE_HREF} from '@angular/common';
let firebaseConfig = {
  apiKey: "AIzaSyDsCge1RMjNxpMAe1uQ3N57wJvBKaekY2E",
  authDomain: "scribe-a10f9.firebaseapp.com",
  databaseURL: "https://scribe-a10f9.firebaseio.com",
  projectId: "scribe-a10f9",
  storageBucket: "scribe-a10f9.appspot.com",
  messagingSenderId: "264794077888",
  appId: "1:264794077888:web:0351c4c17a8ae9e48d0b25",
  measurementId: "G-00EC13K3P1"
};
const app:firebase.app.App = firebase.initializeApp(firebaseConfig, 'Scribe');

export default app;
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditprofileComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
