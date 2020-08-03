import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { VideogamesComponent } from './component/videogames/videogames.component';
import { AddVideogameComponent } from './component/add-videogame/add-videogame.component';
import { UpdateVideoGameComponent } from './component/update-video-game/update-video-game.component';
import { Gameservice } from "./services/game.service";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'video-games', component:VideogamesComponent},
  {path: 'add-game', component:AddVideogameComponent},
  {path: 'edit-game/:id', component:UpdateVideoGameComponent},
  {path: 'delete-game/:id', component:VideogamesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    VideogamesComponent,
    AddVideogameComponent,
    UpdateVideoGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [Gameservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
