import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { ProgLangsComponent } from './prog-langs/prog-langs.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ANGameComponent } from './an-game/an-game.component';
import { SourcesComponent } from './sources/sources.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgLangsComponent,
    WelcomeComponent,
    ANGameComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }