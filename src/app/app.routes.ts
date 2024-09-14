import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'articles',
        component: ArticlesComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: "book",
        component: BookComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    // {
    //     path: 'about',
    // }
];
