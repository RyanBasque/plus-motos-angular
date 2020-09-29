import { AddPostComponent } from './adm/adm-page/add-post/add-post.component';
import { AdmService } from './adm/adm.service';

import { routing } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { AdmComponent } from './adm/adm.component';
import { AdmPageComponent } from './adm/adm-page/adm-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { DetailsPageComponent } from './index-page/details-page/details-page.component';

import { AuthGuard } from './guard/auth-guard.service';

import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    IndexPageComponent,
    DetailsPageComponent,
    AdmComponent,
    AdmPageComponent,
    AddPostComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    routing
  ],
  providers: [
    AdmService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
