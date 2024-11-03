import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileView = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  ngOnInit() {
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
