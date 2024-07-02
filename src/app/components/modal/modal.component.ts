import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})

export class ModalComponent {
  favorites: any[] = [];
  visible: boolean = false;

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getFavorites(); 
      this.favoritesService.getFavoritesObservable().subscribe(favorites => {
        this.favorites = favorites;
      });
  }

  showDialog() {
    this.visible = true;
  }

  clearFavorites() {
    this.favorites = [];
  }
}