import {Component, signal} from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {InstructionComponent} from './instruction/instruction.component';
import {NavButtonsComponent} from '../../shared/components/nav-buttons/nav-buttons.component';

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

  fragments = signal([
    {frag: 'hero', icon: 'pi-hashtag'},
    {frag: 'explore', icon: 'pi-map-marker'},
    {frag: 'travel', icon: 'pi-map'},
  ])

}
