import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './services/storage.service';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { User } from './models/user.model';
import { ErrorMessage } from './models/error.model';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ User, ErrorMessage, StorageService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
