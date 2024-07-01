import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];
  private favoritesSubject = new Subject<any[]>();

  constructor() { }

  getFavorites() {
    return this.favorites;
  }

  getFavoritesObservable(): Subject<any[]> {
    return this.favoritesSubject;
  }

  addFavorite(person: any) {
    this.favorites.push(person);
    this.favoritesSubject.next(this.favorites);
  }

  // me falta agregar el metodo para removerlo 
}
