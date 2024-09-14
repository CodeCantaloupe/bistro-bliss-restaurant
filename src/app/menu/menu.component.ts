import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  activeTab: number = 1;  // Default to first tab

  setActiveTab(tabIndex: number) {
    this.activeTab = tabIndex;  // Set the clicked tab as active
  }
}
