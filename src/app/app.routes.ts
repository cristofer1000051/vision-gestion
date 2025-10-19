import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/admin/dashboard_admin/dashboard';
import { Eduse } from './components/admin/eduse/eduse';
import { ClassRoom } from './components/admin/class_room/class_room';
import { Students } from './components/admin/students/students';
import { Teachers } from './components/admin/teachers/teachers';



export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        // 🚨 CAMBIARE IL REINDIRIZZAMENTO INIZIALE A 'login'
        redirectTo: 'home'
    },
    { path: 'login', component: Login },
    { path: 'home', component: Dashboard },
    { path: 'class-room', component: ClassRoom },
    { path: 'eduse', component: Eduse },
    {path:'students',component:Students},
    {path:'teachers',component:Teachers},
    { path: '**', redirectTo: 'home' }
];
