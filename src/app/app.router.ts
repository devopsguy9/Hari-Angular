import { PutComponent } from './put/put.component';
import { GetComponent } from './get/get.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';




export const router:Routes=[

    {path:'',redirectTo:"header",pathMatch:"full"},
    {path:'header',component:HeaderComponent},
    {path:'login',component:LoginComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {
    path:'dashboard',
    component:DashboardComponent,
    children : [
    {path:'profile',component:ProfileComponent},
    {path:'status',component:StatusComponent},
    {path:'getdata',component:GetComponent},
    {path:'putdata',component:PutComponent}
    ]
}

] 
export const routes = RouterModule.forRoot(router);



