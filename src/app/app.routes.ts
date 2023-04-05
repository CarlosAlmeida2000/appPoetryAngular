import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from './components/login/login.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ChekedSessionGuard } from './guards/cheked-session.guard';


export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [ChekedSessionGuard]},
    {path: 'search', component: SearchComponent, canActivate: [ChekedSessionGuard]},
    {path: 'favorites', component: FavoritesComponent, canActivate: [ChekedSessionGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
]