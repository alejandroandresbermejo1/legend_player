import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SetupCreationComponent } from './components/setup-creation/setup-creation.component';
import { CareerMainComponent } from './components/career-main/career-main.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { ReportComponent } from './components/report/report.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    SetupCreationComponent,
    CareerMainComponent,
    GameOverComponent,
    ReportComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private gameService = inject(GameService);

  screen = () => this.gameService.state().screen;
}
