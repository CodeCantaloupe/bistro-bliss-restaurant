import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { BrowseMenuComponent } from "../browse-menu/browse-menu.component";
import { CustomersReviewsComponent } from "../customers-reviews/customers-reviews.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BrowseMenuComponent, CustomersReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
