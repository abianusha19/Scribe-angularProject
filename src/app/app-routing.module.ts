import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {  
  PlatformLocation,  
  Location,  
  LocationStrategy,  
  HashLocationStrategy,  
  PathLocationStrategy,  
  APP_BASE_HREF
} from '@angular/common'; 


const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'},
    {
      path:'login',component:LoginComponent
    },
    {
      path:'home',component:HomeComponent
    },
    {
      path:'myblogs',component:MyblogsComponent,canActivate:[AuthGuard]
    },
    {
      path:'profile/:id',component:ProfileComponent
    },
    {
      path:'view/:postId',component:ViewComponent
    },
    {
      path:'editprofile/:postId',component:EditprofileComponent
    },
    {
      path:'**',component:HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
