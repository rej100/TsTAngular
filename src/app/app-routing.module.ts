import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgLangsComponent } from "./prog-langs/prog-langs.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ANGameComponent } from "./an-game/an-game.component";
import { SourcesComponent } from "./sources/sources.component";

const routes =
[
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: "programmingLanguages", component: ProgLangsComponent},
  { path: "welcome", component: WelcomeComponent},
  { path: "game", component: ANGameComponent},
  { path: "sources", component: SourcesComponent}
];

@NgModule
({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}