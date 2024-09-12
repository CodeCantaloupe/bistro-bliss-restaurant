import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { BrowseMenuComponent } from "./browse-menu/browse-menu.component";
import { ArticlesComponent } from "./articles/articles.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, BrowseMenuComponent, ArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bistro-bliss-restaurant';
}
