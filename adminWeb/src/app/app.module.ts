import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule,JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LoginAuthService } from './login/shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
