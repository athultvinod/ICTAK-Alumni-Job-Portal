import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EmployerComponent } from './employer/employer.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    FacultyComponent,
    EmployerComponent,
    AlumniComponent,
    AboutusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
