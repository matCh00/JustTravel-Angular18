import {AfterViewInit, Component, ElementRef, inject, input, Renderer2, viewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [
    Button,
    Tooltip
  ],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.scss'
})
export class NavButtonsComponent implements AfterViewInit {

  fragments = input<{frag: string, icon: string}[]>([]);


  navContainer = viewChild<ElementRef>('navContainer');

  private renderer: Renderer2 = inject(Renderer2);

  ngAfterViewInit(): void {
    const containerHeight = this.navContainer()!.nativeElement.offsetHeight;
    this.renderer.setStyle(
      this.navContainer()!.nativeElement,
      'margin-top',
      `-${containerHeight}px`
    );
  }


  scrollTo(index: number): void {
    const offset = index * window.innerHeight;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

}