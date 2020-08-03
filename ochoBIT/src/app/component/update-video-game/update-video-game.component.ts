import { Component, OnInit } from '@angular/core';
import { TemplateGame } from '../../models/games'
import { Gameservice } from "../../services/game.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-video-game',
  templateUrl: './update-video-game.component.html',
  styleUrls: ['./update-video-game.component.css']
})
export class UpdateVideoGameComponent implements OnInit {
  public gotGame: TemplateGame;
  public IDgame;
  constructor(
    private _GameService: Gameservice,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.IDgame = this._ActivatedRoute.snapshot.paramMap.get('id');
    let showID = this.IDgame;
    this.updateGame(showID);
  }



  updateGame(showID){
    this._GameService.getGame(showID).subscribe((res:any)=>{
      console.log(res);
      this.gotGame = res.game;
    })
  }

  newGame(){
    this._GameService.editGame(this.gotGame).subscribe((res:any)=>{
      if (res.statusCode == 200){
        alert(res.message);
        this._Router.navigate(['video-games']);
      }
      else {
        console.log("There's an error in the service")
      }
    })
  }


}
