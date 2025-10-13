import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    { path: 'login', component: Login },
    { path: 'home', component: Dashboard },
    { path: '**', redirectTo: '/home' }
];
