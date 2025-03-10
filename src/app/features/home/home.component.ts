import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  numPlayers: number = 0;
  playerNames: string = '';
  teams: string[][] = [];
  errorMessage: string = '';

  sortearTimes(): void {
    const playersArray = this.playerNames
      .split('\n')
      .flatMap((line) =>
        line
          .replace(/[\d-]/g, ' ')
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .split(/\s{2,}|\s*,\s*|\s*;\s*/g)
          .map((name) => name.trim().toUpperCase())
      )
      .filter((name) => name !== '');

    if (!this.numPlayers || this.numPlayers <= 0 || playersArray.length === 0) {
      this.errorMessage = 'Por favor, preencha todos os campos!';
      this.teams = [];
      return;
    }

    if (this.numPlayers > playersArray.length) {
      this.errorMessage =
        'Número de jogadores por time não pode ser maior que o número total de jogadores.';
      this.teams = [];
      return;
    }

    this.errorMessage = '';
    const shuffledPlayers = this.shuffle(playersArray);

    const numTeams = Math.ceil(shuffledPlayers.length / this.numPlayers);

    console.log(shuffledPlayers);

    this.teams = [];

    for (let i = 0; i < numTeams; i++) {
      const startIndex = i * this.numPlayers;
      const endIndex = startIndex + this.numPlayers;
      const team = shuffledPlayers.slice(startIndex, endIndex);
      this.teams.push(team);
    }
  }

  shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
