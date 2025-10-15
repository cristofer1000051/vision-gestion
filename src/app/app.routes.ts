import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        // 🚨 CAMBIARE IL REINDIRIZZAMENTO INIZIALE A 'login'
        redirectTo: 'login'
    },
    { path: 'login', component: Login },
    { path: 'home', component: Dashboard },
    { path: '**', redirectTo: 'login' }
];
