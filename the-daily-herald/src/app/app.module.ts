import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeneralNewsComponent } from './general-news/general-news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'general-news', component: GeneralNewsComponent },
  // Agrega más rutas para otras secciones si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GeneralNewsComponent } from './general-news/general-news.component';

