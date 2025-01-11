import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {SidebarComponent} from './core/sidebar/sidebar.component';
import {FooterComponent} from './core/footer/footer.component';
import {ScrollService} from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  sidebarVisible: boolean = false;


  private scrollService: ScrollService = inject(ScrollService);


  ngOnInit(): void {
    window.addEventListener('resize', this.updateContentHeight);
    window.addEventListener('load', this.updateContentHeight);

    this.scrollService.initScrollToTop();
  }


  private updateContentHeight() {
    const headerHeight = document.getElementById('header')?.offsetHeight;
    const footerHeight = document.getElementById('footer')?.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  }

}
