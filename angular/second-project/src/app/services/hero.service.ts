import { Injectable } from '@angular/core';
import { HEROES } from '../mock/mock-hero';
import { Hero } from '../model/app.model';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private heroUrls = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) {

  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrls)
      .pipe(
        tap(_ => this.log('get heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
        );
  }

  updateHero(hero: Hero) {
    return this.http.put(this.heroUrls, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log('update hero id ' + hero.id)),
        catchError(this.handleError<any>('update hero'))
      )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroUrls, hero, this.httpOptions)
      .pipe(
        tap( (newHero: Hero) => this.log(`add hero id = ${newHero.id}`)),
        catchError(this.handleError<Hero>('add hero'))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrls}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetch hero ${id}`)),
        catchError(this.handleError<Hero>(`get hero id = ${id}`))
      );
  }


  private log(msg: string) {
    this.messageService.add(`HeroService: ${msg}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}