import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LoadingComponent } from './components/loading/loading.component';
import { TarjetaAuthorComponent } from './components/tarjeta-author/tarjeta-author.component';
import { TarjetaObraComponent } from './components/tarjeta-obra/tarjeta-obra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    LoadingComponent,
    TarjetaAuthorComponent,
    TarjetaObraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
