import { FilterPipe } from './userfilter';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { routes } from './app.router'
import { Subject } from 'rxjs/Subject';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { StatusComponent } from './status/status.component';
import { GetComponent } from './get/get.component';
import { PutComponent } from './put/put.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    ProfileComponent,
    FilterPipe,
    StatusComponent,
    GetComponent,
    PutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,routes,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
