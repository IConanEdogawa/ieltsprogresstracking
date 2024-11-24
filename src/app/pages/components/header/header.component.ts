import { Component, HostListener, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // исправлено здесь
})

export class HeaderComponent {




  ngOnInit() {
    this.checkScreenSize();

  }

  isMobileView = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobileView = window.innerWidth <= 600;
    }
  }

  navigateTo(event: Event) {
    const selectedTool = (event.target as HTMLSelectElement).value;
    if (selectedTool === 'essay') {
      // Перейти на страницу AI Essay check
    } else if (selectedTool === 'speaking') {
      // Перейти на страницу AI Speaking check
    }
  }
  
}
