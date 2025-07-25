import { Routes } from '@angular/router';
import { Menu } from '../components/menu';  
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: Menu
    }
];