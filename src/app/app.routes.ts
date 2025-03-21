import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'), //lazyload
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page.component') //lazyload
            },
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page.component') //lazyload
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },    
    {
        path: '**',
        redirectTo: 'dashboard'
    }
    
];
