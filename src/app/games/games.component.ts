import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <h2>Favorite games of {{ username }}</h2>

    <!-- <li *ngFor="let game of games">
      {{ game.name }}
    </li> -->

    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
   `,
  styles: ``,
})
export class GamesComponent {
  @Input() username= '';
  @Output() addFavorite = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavorite.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
    },
    {
      id: 2,
      name: 'God of War',
    },
    {
      id: 3,
      name: 'Red Dead Redemption 2',
    },
    {
      id: 4,
      name: 'Elden Ring',
    },
    {
      id: 5,
      name: 'Cyberpunk 2077',
    },
  ];
}
