import { Component, OnInit } from '@angular/core';
import { TemplateGame } from '../../models/games'
import { Gameservice } from '../../services/game.service'

@Component({
  selector: 'app-add-videogame',
  templateUrl: './add-videogame.component.html',
  styleUrls: ['./add-videogame.component.css'],
  providers: [Gameservice]
})
export class AddVideogameComponent implements OnInit {

  public title: String; 
  public subtitle: String;
  public game: TemplateGame

  constructor(private _GameService: Gameservice) { 
    this.game = new TemplateGame('','',0,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.game);
    this._GameService.saveGame(this.game).subscribe(res => alert(res.message) , err => console.log(err));
  } 

}
