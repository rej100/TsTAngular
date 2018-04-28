import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProgLangsComponent } from './prog-langs/prog-langs.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ANGameComponent } from './an-game/an-game.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgLangsComponent,
    WelcomeComponent,
    ANGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }