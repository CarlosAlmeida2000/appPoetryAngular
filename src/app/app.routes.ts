import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ChekedSessionGuard } from './guards/cheked-session.guard';
import { TarjetaObraComponent } from './components/tarjeta-obra/tarjeta-obra.component';


export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'favorites', component: FavoritesComponent, canActivate: [ChekedSessionGuard]},
    {path: 'obras/:namePoeta', component: TarjetaObraComponent, canActivate: [ChekedSessionGuard]},
    {path: '**', pathMatch: 'full', redirectTo: 'login' }
]