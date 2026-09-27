import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  private gameService = inject(GameService);

  contactEmail = 'alejandroandresbermejo1@gmail.com';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.goBack();
    }
  }

  goBack() {
    const state = this.gameService.state();
    if (state.previousScreen) {
      this.gameService.setScreen(state.previousScreen);
    } else if (state.player) {
      if (state.player.currentAge >= 40) {
        this.gameService.setScreen('game-over');
      } else {
        this.gameService.setScreen('career-main');
      }
    } else {
      this.gameService.setScreen('setup-creation');
    }
  }
}
