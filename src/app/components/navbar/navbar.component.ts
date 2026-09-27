import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private gameService = inject(GameService);

  screen = () => this.gameService.state().screen;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
    if (event.key === 'Escape' && this.screen() === 'career-main') {
      this.resetGame();
    }
    if (event.key === 'r' || event.key === 'R') {
      this.openReport();
    }
  }

  openReport() {
    this.gameService.setScreen('report');
  }

  resetGame() {
    this.gameService.resetGame();
  }
}
