import { Component, OnInit } from '@angular/core';
import { Gameservice } from "../../services/game.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  
  public listGames = [];
  public getID;
  public IDgame;  
  constructor(
    private _GameService: Gameservice,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getID = this._ActivatedRoute.snapshot.url[0].path;
    if (this.getID == "delete-game"){
      this.IDgame = this._ActivatedRoute.snapshot.paramMap.get('id');
      this.eraseGame();
    }
    else {
      this.showGames();
    }
    console.log(this.getID);
  }

  showGames(){
    this._GameService.getGames().subscribe((res:any)=>{
      if (res.statusCode == 200){
        this.listGames = res.games;
      }
      else {
        console.log("There was an error in the service");
      }
    })
  }

  eraseGame(){
    this._GameService.deleteGame(this.IDgame).subscribe((res:any)=>{
      if (res.statusCode == 200){
        alert(res.message);
        this._Router.navigate(['video-games']);
      }
      else {
        console.log("There's not such ID")
      }
    })
  }
}
