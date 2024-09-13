import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { BrowseMenuComponent } from "../browse-menu/browse-menu.component";
import { CustomersReviewsComponent } from "../customers-reviews/customers-reviews.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BrowseMenuComponent, CustomersReviewsComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
