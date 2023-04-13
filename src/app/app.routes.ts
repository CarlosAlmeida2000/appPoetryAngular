import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ChekedSessionGuard } from './guards/cheked-session.guard';
import { TarjetaObraComponent } from './components/tarjeta-obra/tarjeta-obra.component';
import { FragmentosComponent } from './components/fragmentos/fragmentos.component';
import { ErrorsComponent } from './components/errors/errors.component';


export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'error', component: ErrorsComponent},
    {path: 'favorites', component: FavoritesComponent, canActivate: [ChekedSessionGuard]},
    {path: 'obras/:namePoeta/:urlRetorno', component: TarjetaObraComponent, canActivate: [ChekedSessionGuard]},
    {path: 'fragmento/:nameObra', component: FragmentosComponent, canActivate: [ChekedSessionGuard]},
    {path: '**', pathMatch: 'full', redirectTo: 'login' }
]