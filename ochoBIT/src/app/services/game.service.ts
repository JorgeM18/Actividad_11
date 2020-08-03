import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TemplateGame } from '../models/games'
import { Global } from './global'
import { Observable } from 'rxjs';

@Injectable()

    export class Gameservice{

        public url: String
        header = new HttpHeaders().set('Content-Type','application/json')

        constructor(private _http:HttpClient){
            this.url = Global.url
        }

        test(){
            return 'funciona!'
        }

        saveGame(productGame: TemplateGame) : Observable<any>{
            let params = JSON.stringify(productGame);
            return this._http.post(this.url+'save', params, {headers:this.header})
        }

        getGames(){
            return this._http.get(this.url+'games', {headers:this.header})
        }

        deleteGame(gameID){
            return this._http.delete(`${this.url}games/${gameID}`, {headers:this.header})
        }

        getGame(gameID){
            return this._http.get(`${this.url}games/${gameID}`, {headers:this.header})
        }

        editGame(newGame){
            let params = JSON.stringify(newGame);
            return this._http.put(`${this.url}games/${newGame._id}`, params, {headers:this.header})
        }

    }