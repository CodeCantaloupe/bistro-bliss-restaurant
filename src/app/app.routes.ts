import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

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
    // {
    //     path: 'contact',
    // },
    // {
    //     path: 'about',
    // }
];
