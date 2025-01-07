import {Component} from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {InstructionComponent} from './instruction/instruction.component';
import {NavButtonsComponent} from './nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    InstructionComponent,
    NavButtonsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
