import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesListComponent } from './profiles/profiles-list/profiles-list.component';
import { ProfileDetailComponent } from './profiles/profile-detail/profile-detail.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesListComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
