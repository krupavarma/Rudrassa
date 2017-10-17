

import { AddressComponent } from './contact/address/address.component';
import { AboutComponent } from './contact/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyComponent } from './property/property.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
export const router:Routes=[
    {path:'',redirectTo:"header",pathMatch:"full"},
    {path:'header',component:HeaderComponent,children:[
        {path:'',redirectTo:"home",pathMatch:"full"},
        {path:'home',component:HomeComponent},
        {path:'signup',component:SignupComponent},
        {path:'signin',component:SigninComponent},
        {path:'property',component:PropertyComponent},
    ]},
    
    {path:"contact",component:ContactComponent,children:[
        {path:"about",component:AboutComponent},
        {path:"address",component:AddressComponent}
    ]}

]
export const routes:ModuleWithProviders=RouterModule.forRoot(router);
